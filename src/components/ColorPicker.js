import React from 'react';
class ColorPicker extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          colors : ['red','orange','blue','yellow','green']
      }
    }
    showColor(color){
      return {
        backgroundColor : color
      }
    }
    setActiveColor(color){
      this.props.onReceiveColor(color); 
    }
    render() {
      var elements = this.state.colors.map((color,index)=>{
          return <span 
                        style={this.showColor(color)} 
                        key={index}
                        className={color === this.props.color ? 'active' : ''}
                        onClick={()=>{this.setActiveColor(color)}}
                  >
                  </span>
      })
      
      return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">      
                <div className="panel panel-primary">
                    <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                      {elements}
                    <br/>
                    </div>
                </div>
        </div>
      )
    }
}
export default ColorPicker;