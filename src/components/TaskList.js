import React from "react";
import TaskItem from "./TaskItem"
class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterName : "",
            filterStatus : -1
        }
    }
    run = () => {
        console.log(1)    
    }
    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        },()=>{
            this.props.onFilter(this.state);
        });
        
    }
    render(){
        var element = this.props.tasks.map((task,index)=>{
            return <TaskItem 
            key={index} 
            tasks={task} 
            index={index}
            onUpdateStatus={this.props.onUpdateStatus}
            onHandleDeleteItem = {this.props.onHandleDeleteItem}
            onHandleUpdate = {this.props.onHandleUpdate}
            />
        })
        return (
                <table className="table table-bordered table-hover mgtb-30  ">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên công việc</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input onChange={this.onChange} type="text" name="filterName" className="form-control" defaultValue={""}/>
                        </td>
                        <td>
                            <select onChange={this.onChange} name="filterStatus" className="form-control" defaultValue={-1}>
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </td>
                    </tr>
                    {element}
                    </tbody>
                </table>
            )
        }
}

export default TaskList;