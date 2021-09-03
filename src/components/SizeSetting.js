import React from 'react';
class SieSetting extends React.Component {
    changeSize(params){
        this.props.onChangeSize(params);
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={()=>{this.changeSize(-1)}}>Giảm</button>
                    <button type="button" className="btn btn-success" onClick={()=>{this.changeSize(1)}}>Tăng</button>
                </div>
            </div>
        )
    }
}
export default SieSetting;