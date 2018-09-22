import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

 class Topic extends PureComponent {
    constructor(){
        super();
    }
  render() {
      const { list } = this.props
    return (
        <div>
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img
                                className='topic-pic'
                                src={item.get('imgUrl')}
                                alt=''
                            />
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
             </TopicWrapper>
        </div>
    )
  }
}
//通天获取数据
const TopicState = (state) => {
    return {
        list : state.getIn(["HomeReader" , "topicList"])
    }
}
export default connect(TopicState , null)(Topic)