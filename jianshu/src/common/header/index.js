import React, { Component } from 'react'
//引用react-redux包 可以实现通天要数据
import { connect } from 'react-redux';
//引入包，设计react动效果
import { CSSTransition } from 'react-transition-group';
//actionCreators中引入变量
import { actionCreators } from "./store"
//得到login中的actionCreators
import { actionCreators as LoginactionCreators} from "../../pages/login/store"
//路由跳转
import { Link } from "react-router-dom"
import {
  HeaderWrapper,
  Logo,
  Nav, 
  NavItem,
  SearchWrapper,
  SearchNav,
  SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
  Addition,
  Button,

} from "./style.js"
 class index extends Component {
  getListArea() {
      const { focused , list ,  page , handleMouseEnter , handleMouseLeave , mouseIn , handleChangePage , totalPage} = this.props;
      const newList = list.toJS();
		const pageList = [];
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		};
		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
                  <SearchInfoSwitch 
                  // 这里要使用箭头函数绑定上下文
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe64e;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}
    render() {
   const {focused , handleInputFocus , handleInputBlur, list , login , loginout}  = this.props;
    return (
      <div>
        <HeaderWrapper>
          <Link to = "/">
          {/* 进行路由跳转 */}
            <Logo></Logo>
          </Link>
          
          <Nav>
            <NavItem className = "left active">首页</NavItem>
            <NavItem className = "left">下载APP</NavItem>
            {login ?  <NavItem className = "right" onClick = {() => {loginout()}} >退出</NavItem> :
                  <Link to = "/login">
                  {/* 进行路由跳转 */}
                  <NavItem className = "right">登录</NavItem>
                  </Link> 
           }
            <NavItem className = "right"><i className="iconfont">&#xe636;</i></NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                //这个要和&.slide-enter一致
                classNames="slide"
              >
                 <SearchNav
                 className = {focused ? "focused" : ""}
                 onFocus = {() => { handleInputFocus(list) }}
                 onBlur = { handleInputBlur}
                 >
                 </SearchNav>
              </CSSTransition>
              <i className = {focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe64d;</i>
              {this.getListArea()}
            </SearchWrapper>  
          </Nav>
      
          <Addition>
            <Link to = "/write">
              <Button className = "writtig" > 
                <i className="iconfont">&#xe61c;</i>
                  写文章
              </Button>
            </Link>
              <Button className = "reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }

}
const StatetoProps = (state) => {
   return {
     //当在正常情况下时调用数据时用focused : state.headerReducer.focused 
     //当时immutable时如下 focused : state.headerReducer.get("focused")
     //而在这个时候 state 也是一个js 对象  要把它变成一个immutable对象 state.get("headerReducer").get("focused")
     //也可以改成如下
      focused : state.getIn(["headerReducer" , "focused"]),
      list: state.getIn(['headerReducer', 'list']),
      page: state.getIn(['headerReducer', 'page']),
      totalPage: state.getIn(['headerReducer', 'totalPage']),
      mouseIn: state.getIn(['headerReducer', 'mouseIn']),
      //获取到登录界面数据
      login : state.getIn(['LoginReducer', 'login']),
   }  
};

const DispathtoProps = (dispatch) => {
  return {
    handleInputFocus(list) {
        //规避多次获取数据
        if(list.size === 0){
        dispatch (actionCreators.getList());
        }
        dispatch (actionCreators.InputFocus());
    },

    handleInputBlur() {
      dispatch (actionCreators.InputBlur());
    },

    handleMouseEnter() {
       dispatch (actionCreators.MouseEnter())
    },

    handleMouseLeave() {
      dispatch (actionCreators.MouseLeave())
    },
    
    handleChangePage ( page , totalPage ,  spin) {
      //下面是进行选择小圆圈旋转
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
        //十进制
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      //以下代码是进行换页的
       if(page < totalPage - 1){
         dispatch (actionCreators.ChangePage( page + 1 ))
       }else{
         dispatch (actionCreators.ChangePage( 1 ))
       }
      
    },
    //这个方法是点击退出显示登录
    loginout() {
      dispatch(LoginactionCreators.logout())
    }
  }
}
export default connect(StatetoProps , DispathtoProps)(index)