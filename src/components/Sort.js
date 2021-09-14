import React from "react"
class Sort extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sort : {
                key : 'name',
                value : 1
            }
        }
    }
    onClick = (sortKey,sortValue) =>{
        this.setState({
            key : sortKey,
            value : sortValue
        },()=>{
            this.props.onSort(sortKey,sortValue);
        })
    }
    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle " type="button" data-toggle="dropdown">Sắp Xếp
                    <span className="caret mgl-10"></span></button>
                    <ul className="dropdown-menu">
                        <li onClick={()=>{this.onClick('name',1)}}><a href="#demo">Từ A - Z</a></li>
                        <li onClick={()=>{this.onClick('name',-1)}}><a href="#demo">Từ Z - A</a></li>
                        <li onClick={()=>{this.onClick('status',1)}}><a href="#demo">Trạng thái kích hoạt</a></li>
                        <li onClick={()=>{this.onClick('status',-1)}}><a href="#demo">Trạng thái ẩn</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sort;