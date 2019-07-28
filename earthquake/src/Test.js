import React,{Component} from 'react';
import { Map } from 'react-amap';
class Test extends Component{
  render(){
    return (<div style={{width: '100%', height: '400px'}}>
      <Map amapkey={'42c524fc7feb62c8fb8ae3860d697a61'}/>
    </div>)
  }
}

export default Test;
