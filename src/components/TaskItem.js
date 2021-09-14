import React from "react";
class TaskItem extends React.Component {
    onUpdateStatus = ()=>{
        this.props.onUpdateStatus(this.props.tasks.id)
    }
    onHandleDeleteItem = () => {
        this.props.onHandleDeleteItem(this.props.tasks.id)
    }
    onHandleUpdate = () => {
        this.props.onHandleUpdate(this.props.tasks.id)
    }
    render(){
    return (
        <tr>
            <td>{this.props.index}</td>
            <td>{this.props.tasks.name}</td>
            <td>
                <span className={this.props.tasks.status === true ? "label label-success" : "label label-danger"}
                    onClick={this.onUpdateStatus}
                >
                {this.props.tasks.status === true ? "Kích hoạt" : "Ẩn"}
                </span>
                {/* <button type="button" className="btn btn-success  success">Kích hoạt</button> */}
            </td>
            <td>
                <button type="button" className="btn btn-danger danger" onClick={this.onHandleUpdate}>Sửa</button>
                <button type="button" className="btn btn-success  success" onClick={this.onHandleDeleteItem}>Xóa</button>
            </td>
        </tr>
    )
      }
}

export default TaskItem;