import React from 'react';
import Loadable from 'react-loadable';
//react-loadable 本来就是当打开首页的时候 全部数据都会显示 但是用来这个之后 当点击
//到这个页面是 这里的数据才会去获取  可以是页面优化
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
  	return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>
