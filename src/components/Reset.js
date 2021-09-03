import React from 'react';
class Reset extends React.Component {
    setDefault = ()=>{
      this.props.onSetDefault(true)
    };
    render() {
      return (
        <button type="button" className="btn btn-primary" onClick={this.setDefault}>Reset</button>
      )
    }
}
export default Reset;