 //引包该变量
import * as constant from "./constants"
//引入immutable
import {fromJS} from "immutable"
 //转化为immutable对象
 const data = fromJS({
    focused : false,
    mouseIn : false,
    list : [],
    page : 1,
    totalPage: 1
 });

 export default(state = data,action) => {
    switch (action.type) {
        case constant.SEARCH_FOCUS :
            return  state.set("focused" ,true) ;
        case constant.SEARCH_BLUR :
            return  state.set("focused" ,false);
        case constant.CHANGR_LIST :
            return state.merge({
                list  : action.data,
                totalPage: action.totalPage
            });
        case constant.MONUSE_ENTER :
            return  state.set ("mouseIn" ,true) ;
        case constant.MONSE_LEAVE :
            return  state.set ("mouseIn" ,false);
        case constant.CHANGE_PAGE :
            return  state.set ("page" ,action.page);
        default:
			return state;
    } 
 }