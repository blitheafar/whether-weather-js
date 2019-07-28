// 标题栏
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//引入高德地图组件
import {Map, Marker} from 'react-amap';

class EarthQuakeMap extends Component {
    constructor() {
        super();
        this.toolEvents = {
            created: (tool) => {
                this.tool = tool;
            }
        }
        this.mapPlugins = ['ToolBar'];
    }

    render() {

        const coordinates = {
            longitude: this.props.sendCoordinates[0],
            latitude: this.props.sendCoordinates[1]
        }

        return (<div>
            <div id="title_bar">
                <Link className="clean-link-style" to="/">
                    <span id="map_back">返回</span>
                </Link>
                <span>地图</span>
                <span id="placehold">占位</span>
            </div>
            <div className="map-container">
                <Map plugins={this.mapPlugins} center={coordinates} zoom={4}>
                    <Marker position={coordinates}></Marker>
                </Map>
            </div>
        </div>)
    }
}

export default EarthQuakeMap;
