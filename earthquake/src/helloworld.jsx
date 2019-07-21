//组件构建
//引入react库
import React from 'react';

const HelloWorld=(props)=>{
    console.log(props);
    return(
        <div>{props.name}的HelloWorld</div>
    )
}

//接口暴露
export default HelloWorld;
