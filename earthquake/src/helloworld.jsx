//组件构建
//引入react库
import React, {Component} from 'react';

import './style.css'

//箭头函数的this是在定义函数时绑定的，指向函数外部的this，和外部this指向一致
class HelloWorld extends Component {

    //初始化state
    state = {
        switch: 0,
        name: this.props.name1
    }

    //给组件添加点击事件
    clickHander = () => {
        console.log(this.refs);
        //取得父组件传入的props
        const {
            name1,
            name2
        } = this.props;

        if (this.state.switch === 0) {
            console.log(name1);
            this.setState({
                switch: 1,
                name: name2
            })
        } else {
            console.log(name2);
            this.setState({
                switch: 0,
                name: name1
            })
        }
        // console.log(this.props);
        // console.log(this.props.name);
    }

    refCallback=(ele)=>{
        console.log(ele);
    }

    //生命周期函数
    componentDidMount(props){
        console.log(this.refs);
    }


    render() {
        return (
            <div onClick = {this.clickHander}>
            <div ref='hello'>Hello</div>
            <div ref='world'>world</div>
            </div>
        )
    }
}

//接口暴露
export default HelloWorld;
