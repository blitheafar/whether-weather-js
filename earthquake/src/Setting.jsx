// 设置页
import React from 'react';
import {Link} from 'react-router-dom';

const Setting=()=>{
    return (<div id="title_bar">
        <Link className="clean-link-style" to="/"><span id="setting_back">返回</span></Link>
        <span>设定</span>
        <span id="placehold">占位</span>
    </div>)
}

export default Setting;
