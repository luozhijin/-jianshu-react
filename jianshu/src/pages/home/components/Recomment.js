import React, { PureComponent } from 'react'
import {connect} from "react-redux"
import { RecommendWrapper,
        RecommendItem,
        AppDowon
} from "../style";

 class Recomment extends PureComponent {
    constructor(){
        super();
    }
  render() {
      const { list } = this.props
    return (
      <div>
             <RecommendWrapper>
                {list.map((item) => (
                    <RecommendItem key = {item.get("id")} imgUrl={item.get('imgUrl')}></RecommendItem>
                    
                    ))
                }
            </RecommendWrapper>
            <AppDowon>
                <div>
                    <img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=" "/>
                </div>
                <div>
                    <h3>下载简书手机App >
                    </h3>
                    <p>随时随地发现和创作内容</p>
                </div>
                
            </AppDowon>
      </div>
    )
  }
}
const recommentDate = (data) => ({
    list : data.getIn(["HomeReader" , "recommendList"])
})
export default connect(recommentDate ,null)(Recomment)