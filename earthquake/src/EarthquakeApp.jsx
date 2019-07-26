import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

//引入地震列表组件
import Single from './Single';

//引入载入动画组件
import Loading from './Loading';
//地图组件页
import EarthQuakeMap from './Map';
//设置组件页
import Setting from './Setting';

class EarthquakeApp extends Component {
    state = {
        loading: true
    }

    //钩子函数，用于隐藏加载动画
    hideLoading = () => {
        this.setState({loading: false})
    }

    //钩子函数，取得子组件点击的经纬度
    getGeoLocation = (_coordinates) => {
        //console.log(_coordinates);
        //设置state经纬度
        this.setState({coordinates: _coordinates})
    }

    render() {
        const {loading} = this.state;
        return (<div>
            <Route path="/" exact={true} render={() => (<div>
                    <div id="title_bar">
                        <span id="back">天气</span>
                        <span>实况地震</span>
                        <Link className="clean-link-style" to="/setting">
                            <span id="setting">设置</span>
                        </Link>
                    </div>
                    <Single hideLoading={this.hideLoading} getGeoLocation={this.getGeoLocation}/>
                    <Loading loading={loading}/></div>)}/>
            <Route path="/map/" render={() => (<EarthQuakeMap sendCoordinates={this.state.coordinates}/>)}/>
            <Route path="/setting/" render={() => (<Setting/>)}/>
        </div>)
    }
}

export default EarthquakeApp;
