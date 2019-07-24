import React, {Component} from 'react';

//引入地震列表组件
import Single from './Single';
//引入载入动画组件
import Loading from './Loading';

class EarthquakeApp extends Component {
    state = {
        loading: true
    }

    //钩子函数，用于隐藏加载动画
    hideLoading=()=>{
        this.setState({
            loading: false
        })
    }
    render() {
        const {loading} = this.state;
        return (<div>
            <Single hideLoading={this.hideLoading}/>
            <Loading loading={loading}/>
        </div>)
    }
}

export default EarthquakeApp;
