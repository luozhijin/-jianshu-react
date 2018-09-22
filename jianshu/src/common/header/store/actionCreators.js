 //引包该变量
 import * as constant from "./constants"
 //axios进行请求数据
 import axios from 'axios';
 //
 import { fromJS } from "immutable";

export const InputFocus = () => ({
    "type" : constant.SEARCH_FOCUS
});
export const InputBlur = () => ({
    "type" : constant.SEARCH_BLUR
});
export const MouseLeave = () => ({
    "type" : constant.MONSE_LEAVE
});
export const MouseEnter = () => ({
    "type" : constant.MONUSE_ENTER
});
export const ChangePage = ( page ) => ({
    "type" : constant.CHANGE_PAGE,
    page
});

 const changeList = (data) => ({
     type : constant.CHANGR_LIST,
     data : fromJS(data),
     totalPage: Math.ceil(data.length / 10)
     
 });
 export const getList = () => {
     return (dispatch) => { 
        axios.get("/api/headerData.json").then((res) => {
            dispatch(changeList(res.data.data))
        }).catch(() => {
            console.log("error")
        })
     }
 }