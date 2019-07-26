//单个地震显示
import React, {Component} from 'react';
import './css/main.css';
import {Link} from 'react-router-dom';

class Single extends Component {
    state = {
        earthquakeArr: []
    }
    componentDidMount() {
        let api = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-07-22&minmagnitude=4&orderby=time&limit=30';
        //fetch请求地震数据
        fetch(api).then((response) => {
            //console.log(response);
            return response.json();
        }).then((myJson) => {
            //console.log(myJson);
            //设置地震列表
            this.setState({earthquakeArr: myJson.features})
        }).then(() => {
            //调用父组件钩子函数，隐藏加载动画
            this.props.hideLoading();
        })
    }

    //保留一位小数处理方法
    trimMag(_mag) {
        return Math.floor(_mag * 10) / 10;
    }

    //unix时间转换
    unixTimeFormat(_time) {
        let lessTenFormat = (_number) => {
            return _number < 10
                ? ('0' + _number)
                : _number;
        }
        let unixTime = new Date(_time);
        let month = lessTenFormat(unixTime.getMonth() + 1);
        let date = lessTenFormat(unixTime.getDate());
        let hour = lessTenFormat(unixTime.getHours());
        let minute = lessTenFormat(unixTime.getMinutes());
        let days = unixTime.getDay();
        //console.log(month,date,hour,minute);
        switch (days) {
            case 1:
                days = '周一'
                break;
            case 2:
                days = '周二'
                break;
            case 3:
                days = '周三'
                break;
            case 4:
                days = '周四'
                break;
            case 5:
                days = '周五'
                break;
            case 6:
                days = '周六'
                break;
            default:
                days = '周日'
                break;
        }
        return month + '/' + date + ' ' + hour + ':' + minute + ' ' + days;
    }

    //判断地震区域字符是否存在of
    checkOf(_area) {
        return _area.indexOf('of') === -1
            ? false
            : true;
    }

    //通过震级匹配不同颜色
    matchMagColor(_mag) {
        _mag = Math.floor(_mag);
        let color = '';
        switch (_mag) {
            case 1:
                color = 'level-1';
                break;
            case 2:
                color = 'level-2';
                break;
            case 3:
                color = 'level-3';
                break;
            case 4:
                color = 'level-4';
                break;
            case 5:
                color = 'level-5';
                break;
            case 6:
                color = 'level-6';
                break;
            case 7:
                color = 'level-7';
                break;
            case 8:
                color = 'level-8';
                break;
            case 9:
                color = 'level-9';
                break;
            case 10:
                color = 'level-10';
                break;
            case 11:
                color = 'level-11';
                break;
            default:
                color = 'level-12';
                break;
        }

        return color;
    }

    //显示坐标
    showLocation=(name,e)=>{
        e.preventDefault();
        //console.log(name);
        //传值到父组件
        this.props.getGeoLocation(name);
    }

    render() {
        const {earthquakeArr} = this.state;
        return (<ul className="list">
            {
                earthquakeArr.map((item, index) => (<li className="single-item" key={index} onClick={this.showLocation.bind(this,item.geometry.coordinates)}>
                <Link className='single_link clean-link-style' to="/map">
                    <div className="mag-circle-container">
                        <i className={`mag-circle ${this.matchMagColor(item.properties.mag)}`}>{this.trimMag(item.properties.mag)}</i>
                    </div>
                    <div className="mag-right-container">
                        <div className="single-item-middle">
                            <span className="area-sub">{
                                    this.checkOf(item.properties.place)
                                        ? item.properties.place.split(' of ')[0] + ' of'
                                        : ''
                                }</span>
                            <span className="area-main">{
                                    this.checkOf(item.properties.place)
                                        ? item.properties.place.split(' of ')[1]
                                        : item.properties.place
                                }</span>
                        </div>
                        <div className="single-item-right">
                            <span className="item-time">{this.unixTimeFormat(item.properties.time)}</span>
                            <span className="item-mag">震源深度:{item.geometry.coordinates[2].toFixed(2)}km</span>
                        </div>
                    </div>
                </Link></li>))
            }
        </ul>)
    }
}

export default Single;
