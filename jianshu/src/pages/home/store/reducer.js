import { fromJS } from "immutable"
import * as constants from "./constants"
const data = fromJS({
    topicList : [],
    articleList : [],
    recommendList : [],
    page : 1,
    showScroll : false ,
    authorList : [] ,
    writepage : 1 ,
    pagetotl : 1,

})
export default (state = data , action) => {
    switch (action.type){
        case constants.CHANGE_HOME:
            return state.merge({
                topicList :fromJS(action.topicList),
                articleList :fromJS(action.articleList),
                recommendList :fromJS(action.recommendList),    
                authorList :fromJS(action.authorList),   
                pagetotl : fromJS(action.pagetotl) 
            }) 
        case constants.CHANGE_LIST:
            return state.merge({
                articleList : state.get('articleList').concat(action.List),
                page : action.page
            })
        case constants.TOP_SHOW:
            return state.merge({
                showScroll : action.bool,
            })
        case constants.CHANGE_PAGE:
            return state.merge({
                writepage : action.writepage
            })
            
        default :
            return state
    }
  
}