import React from "react"
class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword : ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name] : value
        })
    }
    onSearch = () =>{
        this.props.onSearch(this.state.keyword);
    }
    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control"
                        name = "keyword"
                        onChange = {this.onChange}
                        />
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={this.onSearch}
                        >Tìm</button>
                </div>
            </div>
        )
    }
}

export default Search;