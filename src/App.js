import React from 'react';
import ColorPicker from './components/ColorPicker'
import Result from './components/Result'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
class App extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
        color : 'red',
        fontSize: 15
    }
    this.onsetColor = this.onsetColor.bind(this);
  }
  onsetColor(params){
    this.setState({
      color : params
    })
  }
  onChangeSize = (params)=>{
    var result =  this.state.fontSize + params
        if (result <= 35 &&  result >= 0){
          this.setState({
            fontSize : this.state.fontSize + params
          })
        }else {
            if (result > 35){
                alert("Không thể tăng font-size quá 35px")
            } else {
                alert("Không thể giảm font-size quá 0px")
            }
        }
    
  }
  onSetDefault = (value)=>{
    if (value){
      this.setState({
        color : 'red',
        fontSize: 15
      })
    }
  }
  render() {
    return (
      <div className="App">
          <div className="row">
              <ColorPicker color={this.state.color} onReceiveColor={this.onsetColor}/>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SizeSetting 
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize}
                />
                <Reset onSetDefault={this.onSetDefault}/>  
            </div>
            <Result color={this.state.color} fontSize={this.state.fontSize}/>
          </div>
      </div>
    )
  }
}
export default App;