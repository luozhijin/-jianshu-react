import  axios  from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

//置顶
export const toggleTopShow = (bool) => ({
	type : constants.TOP_SHOW,
	bool
})
//改变页数
export const ChangePage = (writepage) => ({
	type : constants.CHANGE_PAGE,
	writepage
})


const changeHomedata = (result) => ({
	type : constants.CHANGE_HOME,
	topicList: result.topicList,
	articleList : result.articleList,
	recommendList : result.recommendList,
	authorList : result.authorList,
	pagetotl : Math.ceil(result.authorList.length / 5)
});

const changeListdata = (result , page) => ({
	type : constants.CHANGE_LIST,
	//这个转化为immutable类型很重要  不然到后面get方法不能使用
	List: fromJS(result),
	page 
});

//因为有了thunk那么现在在这里可以用axios进行异步请求
//这个axios请求是为了获取到刚一开始就要显示到界面的数据
export const changeHome = () => {
	return (dispatch) => {
		axios.get("./api/homeData.json").then((doc) => {
			dispatch(changeHomedata(doc.data.data))	
		}).catch(() => {
			console.log("error")
		})
	}
};

//这个axios 是为了点按下获取更多按钮时获取数据
export const changeListMore = (page) => {
	return (dispatch) => {
		axios.get("./api/ListMore.json?page=" + page).then((doc) => {
			dispatch(changeListdata(doc.data.data , page ))	
		}).catch(() => {
			console.log("error")
		})
	}
	
};

