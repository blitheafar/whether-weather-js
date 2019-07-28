//引入react，组件，Component为react内模块
import React from 'react';
//引入react-dom render方法
// import {render} from 'react-dom';
import ReactDom from 'react-dom';

//引入BrowserRouter组件
import {HashRouter} from 'react-router-dom'

import EarthquakeApp from './EarthquakeApp';

//测试组件
import Test from './Test';


//引入helloworld组件
//import HelloWorld from './helloworld';
//引入Button组件
//import Button from './button';
//引入Diaolog组件
//import Dialog from './Dialog';

const root=document.querySelector('#root');

//渲染react dom进html dom
// render(<HelloWorld/>,root);
// ReactDom.render(<BrowserRouter><EarthquakeApp/></BrowserRouter>,root);
ReactDom.render(<HashRouter><EarthquakeApp/></HashRouter>,root);
