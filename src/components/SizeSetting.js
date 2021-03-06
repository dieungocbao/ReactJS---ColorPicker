import React, { Component } from 'react';

class SizeSetting extends Component {
   changeSize(value){
       this.props.onChangeSize(value);
   }
    render() {
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">                 
                    <button type="button" className="btn btn-success" onClick={()=>this.changeSize(1)}>Tăng</button>
                    <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-1)}>Giảm</button>                  
                </div>
            </div>
        
        );
    }
}

export default SizeSetting;
