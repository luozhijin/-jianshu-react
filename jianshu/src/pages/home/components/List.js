import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from "../style"
import { connect } from "react-redux";
import * as actionCreators from "../store/actionCreators";
import { Link } from "react-router-dom"
//这时 有一个重要的事项 就是对组件进行优化 ， 在没有优化前，当页面跳转 数据改变的时候，每个组件
//都会进行一次渲染 ， 在network/doc中可以观察
//方法是用PureComponent可以避免这个问题 但是这里只能配合着immutable使用 ，如果不配合他使用可能会出现问题
 class List extends PureComponent {
    constructor(){
        super();
    }
  render() {
      const {list , getMoreList , page} =  this.props
    return (
      <div>
            {
                list.map((item ,index ) => (
                    <ListItem key = {item.get('id')}>
                        <Link to ={"/detail/" + item.get('id')}>
                            <img src={item.get("imgUrl")} className = "pic" alt=""/>
                                <ListInfo>
                                    <h3 className = "title">{item.get("title")}</h3>
                                    <p className = "desc">{item.get("desc")}</p>
                                </ListInfo>
                        </Link>
                    </ListItem>
                ))
            }
        <LoadMore onClick = { () => { getMoreList(page)}}>更多文字</LoadMore>
      </div>
    )
  }
}
//通天获取数据
const ListState = (state) => ({
    list : state.getIn(["HomeReader" , "articleList"]),
    page : state.getIn(["HomeReader" , "page"])
})
const ListDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.changeListMore( page + 1 ))
    }
})
export default connect (ListState , ListDispatch)(List)

