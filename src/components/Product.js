import React from 'react';
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.showInfoProduct = this.showInfoProduct.bind(this)
    }
    showInfoProduct(){
        alert(this.props.name);
    }
    render(){
    return (
      <div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <div className="thumbnail">
                  <img src={this.props.image} alt="iphone"/>
                  <div className="caption">
                      <h3>{this.props.name}</h3>
                      <p>
                         <i>{this.props.des}</i>
                      </p>
                      <p>{this.props.price}</p>
                      <p>
                          <a href="#tt" className="btn btn-primary" onClick={this.showInfoProduct}>Mua hang</a>
                          <a href="#tt" className="btn btn-default">Chi tiet</a>
                      </p>
                  </div>
              </div>
          </div>
          
        </div>
        );
    }
    
  }
  
  export default Product;
  