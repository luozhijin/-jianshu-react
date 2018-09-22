import React, { Component } from 'react'
import List from "./components/List"
import Recomment from "./components/Recomment"
import Topic from "./components/Topic"
import Writer from "./components/Writer"
import * as actionCreators from "./store/actionCreators";
import { connect } from "react-redux"
import {
    HomeWrapper,
    HomeLeft,
	HomeRight,
	BackTop

} from "./style.js"
 class Home extends Component {
    constructor(props){
        super(props)
    };

	handleScrollTop () {
		window.scrollTo(0 , 0)
  };
  
  render() {
    return (
      <div>
        <HomeWrapper>
            <HomeLeft>
               <img className = "banner-img" src="//upload.jianshu.io/admin_banners/web_images/4435/c1d3ca63353c8bd527f0d781605516cb5b266d02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
               <Topic></Topic>
               <List></List>
            </HomeLeft>
            <HomeRight>
				<Recomment></Recomment>
				<Writer></Writer>
            </HomeRight>
			{this.props.scroll ? <BackTop onClick = { () => {this.handleScrollTop()}}>∧</BackTop> : null}
        </HomeWrapper>
      </div>
    )
  }
  //当渲染完毕时就加载数据
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  //当主键不用是 让其消失 移除
	componentWillUnmount () {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);

	}
	//在wind上绑定一个时间判断 界面是否超过一个数 
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapState = (state) => ({
	scroll : state.getIn(["HomeReader" ,"showScroll"])
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
        dispatch(actionCreators.changeHome())
  },
  changeScrollTopShow() {
		if (document.documentElement.scrollTop > 300) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
  }
});
export default connect(mapState, mapDispatch)(Home);

