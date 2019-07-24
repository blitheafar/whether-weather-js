import React,{Component} from 'react';
import Button from './button';
import Dialog from './Dialog';
import './style.css';

class App extends Component{
    state={
        loading: false,
        dialog: false,
        message: 'xxx'
    }

    //点击按钮提交
    submit=()=>{
        this.setState({
            loading: true
        })

        //模拟数据请求过程
        setTimeout(()=>{
            //随机数模拟成功或失败
            const res=Math.random(1);
            if (res>0.5) {
                this.setState({
                    dialog: true,
                    message:'提交成功',
                })
            }else{
                console.log('提交失败');
                this.setState({
                    dialog: true,
                    message: '提交失败'
                })
            }

            //停止加载动画
            this.setState({
                loading: false
            })
        },1000)
    }

    //点击按钮关闭
    close=()=>{
        this.setState({
            dialog: false
        })
    }

    render(){
        //从state取得参数
        const {loading,dialog,message}=this.state;

        return(
        <div className='app-wrap'>
            <Button loading={loading} submit={this.submit}>提交</Button>
            {dialog && <Dialog message={message} close={this.close}/>}
        </div>
        )
    }
}

export default App;
