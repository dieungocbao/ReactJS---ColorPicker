import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 20
    }
  }
  onSetColor = (params) => {
    this.setState({
      color: params,
    });
  }
  onChangeSize=(value) => {
    // 8  <= size <= 40
    if(this.state.fontSize+value >=8 &&  this.state.fontSize+value <=40) {
      this.setState({
        fontSize: this.state.fontSize+value
      })
    }
  }
  onSettingDefault = (value) =>{
    if(value===true) {
      this.setState({
        color:'red',
        fontSize:20
      });
    }
  }
  render() {
    return (
      <div className="container mt-50">
        <div className="row">        
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>  
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} />
              <Reset onSettingDefault={this.onSettingDefault}/>
            </div>                                             
            <Result color={this.state.color} fontSize={this.state.fontSize}/>       
        </div>       
      </div>   
    );
  }
}

export default App;
