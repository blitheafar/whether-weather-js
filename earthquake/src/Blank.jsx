import React from 'react';
const Blank = (props) => {
    const showBlank=props.showBlank;
    return (<div id="empty_hint" style={{display: showBlank?'inline':'none'}}>当前无地震数据</div>)
}

export default Blank;
