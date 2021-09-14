import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Control from './components/Control';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm : false,
            keyword : '',
            taskEditing : null,
            filter : {
                name : '',
                status : -1
            },
            sortValue : {
                key : 'name',
                value : 1
            }
        };
    }

    componentDidMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            });
        } else {
            this.resetData();
        }
    }

    s4() {
        return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + "-" + this.s4() + "-" + this.s4() + "-"+this.s4() + "-"+ this.s4();
    }

    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id){
                result = index;
            }
        });
        return result;
    }

    onUpdateStatus = (id) => {
        var tasks = this.state.tasks;
        var index = this.findIndex(id);
        tasks[index].status = !tasks[index].status;
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    onHandleUpdate = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];   
        console.log(taskEditing)
        this.setState({
            taskEditing : taskEditing,
            isDisplayForm : true
        })
    }

    
    onToggleForm = () => {
        if(this.state.taskEditing !== null && this.state.isDisplayForm){
            this.setState({
                taskEditing : null,
                isDisplayForm : true
            });

        }else{
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditing : null
            });
        }
    }

    handleAddProject = () => {
        this.onOpenForm();
        this.setState({
            taskEditing : null
        })
    }

    onExitForm = () =>{
        this.setState({
            isDisplayForm : false,
            taskEditing : null
        });
    }

    onOpenForm = () =>{
        this.setState({
            isDisplayForm : true,
            taskEditing : null
        });
    }

    onSubmit = (data)=>{
        var { tasks } = this.state;
        if (data.id === ''){
            data.id = this.generateID();
            tasks.push(data);
        } else {
            var index = this.findIndex(data.id);
            console.log(index);
            tasks[index] = data;
            this.onExitForm();
        }
        this.setState({
            tasks : tasks
        })
        localStorage.setItem("tasks",JSON.stringify(tasks   ));
    }
    onHandleDeleteItem = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        tasks.splice(index, 1);
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.onExitForm();
    }
    resetData = ()=>{
        var tasks = [
            {
              id : this.generateID(),
              name : "Học lập trình Reactjs",
              status :  true
            },
            {
              id : this.generateID(),
              name : "Đi bơi",
              status :  false
            },
            {
              id : this.generateID(),
              name : "Đi ngủ",
              status :  true
            }
        ]
        localStorage.setItem('tasks',JSON.stringify(tasks));
        window.location.reload();
    }
    
    onFilter = (data) => {
        this.setState({
            filter : {
                name : data.filterName.toLowerCase(),
                status :  parseInt(data.filterStatus,10)
            }
        })
    }
    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        })
    }
    onSort = (keySort,keyValue) => {
        this.setState({
            sortValue : {
                key : keySort,
                value : keyValue
            }
        })
    }
    render() {
        var {
            tasks,
            isDisplayForm,
            taskEditing,
            keyword,
            sortValue
        } = this.state;
        if (tasks) {
            tasks = tasks.filter((task,index)=>{
                return (task.name.toLowerCase().indexOf(this.state.filter.name)>=0 ? true : false)
            })
            if (this.state.filter.status !== -1){
                tasks = tasks.filter((task,index)=>{
                return (task.status===(this.state.filter.status ? true : false))
            })}
        }
        function removeAccents(str) {
          return str.normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/đ/g, 'd').replace(/Đ/g, 'D');
        }
        if (keyword) {
            keyword = removeAccents(keyword.toLowerCase());
            tasks = tasks.filter((task,index)=>{
                var check = task.name.toLowerCase();
                return (removeAccents(check).indexOf(keyword)>=0 ? true : false)
            })
        }
        console.log(sortValue);
        if (sortValue.key === "name"){
            console.log('name')
            tasks.sort((a,b)=>{
                if (a.name > b.name) return sortValue.value;
                else return -sortValue.value;
            })
        } else {
            tasks.sort((a,b)=>{
                if (a.status < b.status) return sortValue.value;
                else return -sortValue.value;
            })
        }
        var elmForm = isDisplayForm === true ? <TaskForm 
                                                        onSubmitData={this.onSubmit}
                                                        onExitForm={this.onExitForm}
                                                        taskEditing={taskEditing}
                                                        resetData={this.resetData}
                                                /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        { elmForm }
                    </div>
                    <div className={ isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm} >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <Control 
                                onSearch={this.onSearch}
                                onSort={this.onSort}
                                />
                        <TaskList
                            tasks={tasks}
                            onUpdateStatus={this.onUpdateStatus}
                            onHandleDeleteItem={this.onHandleDeleteItem}
                            onHandleUpdate={this.onHandleUpdate}
                            onFilter={this.onFilter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
