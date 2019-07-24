import React from 'react';
//加载动画组件
const Loading=(props)=>{
    //取得props参数
    const{loading}=props;
    return (
        <div id="preloader_1" style={{display: loading?'inline':'none'}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Loading;
