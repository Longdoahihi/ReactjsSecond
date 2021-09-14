import React from "react";
class TaskForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            id : '',
            name : '',
            status : false
        }
    }
    componentDidMount(){
        if (this.props.taskEditing){
            this.setState({
                id : this.props.taskEditing.id,
                name : this.props.taskEditing.name,
                status : this.props.taskEditing.status
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.taskEditing){
            this.setState({
                id : nextProps.taskEditing.id,
                name : nextProps.taskEditing.name,
                status : nextProps.taskEditing.status
            })
        }
        else {
            this.setState({
                id : '',
                name : '',
                status : false
            })
        }
    }
    
    
    handleHideTaskForm = ()=>{
        this.props.onExitForm()
    }
    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value === "true" ? true : target.value;

        this.setState({
            [name] : value
        })
    }
    onSubmit = (event)=>{
        event.preventDefault();
        if (this.state.name !== ''){
            this.props.onSubmitData(this.state)
        }
    } 
    resetData = ()=>{
        this.props.resetData();
    }
    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + "-" + this.s4() + "-" + this.s4() + "-"+this.s4() + "-"+ this.s4();
    }
      render(){
        var taskEditing = this.props.taskEditing
        return (
            <div className="panel panel-warning taskForm">
                <div className="panel-heading">
                <h3 className="panel-title" >
                    {taskEditing ? 'Sửa công việc' : 'Thêm công việc'}
                    <div className="icon-close text-right" onClick={this.handleHideTaskForm}>
                        <i className="fas fa-times-circle" ></i>
                    </div>
                </h3>
                </div>
                <form className="panel-body"  onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Tên : </label>
                    <input 
                            type="text" 
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group">
                    <label>Trạng thái : </label>
                    <select  className="form-control" 
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                    >
                        <option value={true}>Kích hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-success mgr-10">Lưu lại</button>
                    <button type="button" className="btn btn-danger mgr-10">Hủy bỏ</button>                               
                    <button type="button" className="btn btn-warning" onClick={this.resetData}>Reset List</button>                               
                    </div>
                </form>
            </div>
        )
      }
}

export default TaskForm;