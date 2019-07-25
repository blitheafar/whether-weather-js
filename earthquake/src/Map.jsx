// 标题栏
import React from 'react';
import {Link} from 'react-router-dom';
const Map=()=>{
    return (<div id="title_bar">
        <Link className="clean-link-style" to="/"><span id="map_back">返回</span></Link>
        <span>地图</span>
        <span id="placehold">占位</span>
    </div>)
}

export default Map;
