//引入react，组件，Component为react内模块
import React from 'react';
//引入react-dom render方法
// import {render} from 'react-dom';
import ReactDom from 'react-dom';

import App from './App';
import News from './News';
import EarthquakeApp from './EarthquakeApp';


//引入helloworld组件
//import HelloWorld from './helloworld';
//引入Button组件
//import Button from './button';
//引入Diaolog组件
//import Dialog from './Dialog';

const root=document.querySelector('#root');

//渲染react dom进html dom
// render(<HelloWorld/>,root);
ReactDom.render(<EarthquakeApp/>,root);
