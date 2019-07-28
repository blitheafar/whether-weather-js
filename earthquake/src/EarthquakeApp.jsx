import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';

//引入地震列表组件
import Single from './Single';

//引入载入动画组件
import Loading from './Loading';
//地图组件页
import EarthQuakeMap from './Map';
//设置组件页
import Setting from './Setting';
//空白提示组件页
import Blank from './Blank';

class EarthquakeApp extends Component {
    state = {
        loading: true,
        showBlank: false,
        orderby: 'time',
        minMag: 4,
        maxMag: 10
    }

    //钩子函数，用于隐藏加载动画
    hideLoading = () => {
        this.setState({loading: false})
    }

    isShowBlank=(_state)=>{
        this.setState({
            showBlank: _state,
        })
    }

    //钩子函数，取得子组件点击的经纬度
    getGeoLocation = (_coordinates) => {
        //console.log(_coordinates);
        //设置state经纬度
        this.setState({coordinates: _coordinates})
    }

    //钩子函数，处理地震请求参数
    handleSettingData = (_orderby, _minMag, _maxMag) => {
        //console.log(_orderby, _minMag, _maxMag);
        //更新参数
        this.setState({loading: true,showBlank:false, orderby: _orderby, minMag: _minMag, maxMag: _maxMag})
    }

    render() {
        const {loading,showBlank, orderby, minMag, maxMag} = this.state;
        return (<div>
            <Switch>
                <Route path="/" exact={true} render={() => (<div>
                        <div id="title_bar">
                            <a href="../../index.html" target="_self"><span id="back">天气</span></a>
                            <span>实况地震</span>
                            <Link className="clean-link-style" to="/setting">
                                <span id="setting">设置</span>
                            </Link>
                        </div>
                        <Single isShowBlank={this.isShowBlank} hideLoading={this.hideLoading} orderby={orderby} minMag={minMag} maxMag={maxMag} getGeoLocation={this.getGeoLocation}/>
                        <Loading loading={loading}/>
                        <Blank showBlank={showBlank}/>
                    </div>)}/>
                <Route path="/map" render={() => (<EarthQuakeMap sendCoordinates={this.state.coordinates}/>)}/>
                <Route path="/setting" render={() => (<Setting orderby={orderby} minMag={minMag} maxMag={maxMag} showLoading={this.showLoading} handleSettingData={this.handleSettingData}/>)}/>
            </Switch>
        </div>)
    }
}

export default EarthquakeApp;
