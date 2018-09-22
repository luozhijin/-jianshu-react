import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import * as actionCreators from "../store/actionCreators"
import {
   WriterWrapper,
   LoadMore,
   WriterList,
   Detail
} from "../style"
class Writer extends PureComponent {
    getlist(){
        const { list , writepage} = this.props;
        const newList = list.toJS();
        const pageList = [];
		if (newList.length) {
			for (let i = (writepage - 1) * 5; i < writepage * 5; i++) {
				pageList.push(
                    //key = {newList[i].id} 这个必须写
					<WriterList key = {newList[i].name}>
                        <img className = "portrait"  src={newList[i].imgURL} alt=""/>
                        <Detail>
                            <h3>{newList[i].name}</h3>
                            <p>{newList[i].datail}</p>
                            <span>+关注</span>  
                        </Detail>
                    </WriterList>
				)
            }
        }
        if(pageList.length){
            return(
                <WriterWrapper>
                    {pageList}
                </WriterWrapper>  
            )
        }
        
    }
    render() {
        const { handleChangePage , pagetotl , writepage} = this.props;
        return (
            <div> 
                <WriterWrapper>
                        <div className = "top">
                            <span className = "left">著者推荐</span>
                            <span className = "right"  onClick ={ () => {handleChangePage( writepage ,pagetotl)}}>
                                <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe64e;</i>
                                换一批
                            </span>
                        </div>
                        {this.getlist()}
                        <LoadMore>查看更多＞</LoadMore>
                </WriterWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    list : state.getIn(["HomeReader" , "authorList"]),
    writepage :  state.getIn(["HomeReader" , "writepage"]),
    pagetotl : state.getIn(["HomeReader" , "pagetotl"])
})
const mapDispatch = (dispatch) => {
    return {
      handleChangePage ( writepage , pagetotl ,  spin) {
        //下面是进行选择小圆圈旋转
        // let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        //       if (originAngle) {
        //   //十进制
        //           originAngle = parseInt(originAngle, 10);
        //       }else {
        //           originAngle = 0;
        //       }
        //       spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
  
        //以下代码是进行换页的
         if(writepage <= pagetotl-1){
           dispatch (actionCreators.ChangePage( writepage + 1 ))
         }else{
           dispatch (actionCreators.ChangePage( 1 ))
         }
    }
  }
}
export default connect(mapState , mapDispatch)(Writer) 