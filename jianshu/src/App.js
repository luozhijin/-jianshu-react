import React, { Component } from 'react'
import Header from "./common/header"
import { Provider } from "react-redux"
import store from "./store/index";
//做路由
import { BrowserRouter , Route } from "react-router-dom"
//导入组件
import Home from "./pages/home"
import Detail from './pages/detail/loadable.js';
import Login from "./pages/login"
import Write from "./pages/write"


export default class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Provider store = {store}>
                <div>
                    
                    <BrowserRouter>
                        <div>
                            {/* 这里要注意路由组件一定要在路由里 */}
                            <Header></Header>
                            {/* //这个要注意是“/”不是“./” exact当和组件需要的路由完全相同时才显示*/}
                            <Route path = "/" exact component = { Home }></Route>
                            <Route path = "/login" exact component = { Login }></Route>
                            <Route path = "/write" exact component = { Write }></Route>
                            <Route path = "/detail/:id" exact component = {Detail }></Route>
                        </div>
                    </BrowserRouter>
                </div>
                
            </Provider>
        )
  }
}
