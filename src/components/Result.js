import React from 'react';
class Result extends React.Component {
  showFontSize = ()=>{
    return { 
      fontSize : this.props.fontSize,
      borderColor : this.props.color,
      color : this.props.color
    }
  }
    render() {
      return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color : {this.props.color} - font-size : {this.props.fontSize}px</p>
            <div id="content" style={this.showFontSize()} >Nội dung setting</div>
        </div>
      )
    }
}
export default Result;