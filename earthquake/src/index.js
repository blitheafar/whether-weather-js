//引入react
import React from 'react';
//引入react-dom render方法
// import {render} from 'react-dom';
import ReactDom from 'react-dom';


//引入helloworld组件
import HelloWorld from './helloworld';

const root=document.querySelector('#root');

//渲染react dom进html dom
// render(<HelloWorld/>,root);
ReactDom.render(<HelloWorld name="blix"/>,root);
