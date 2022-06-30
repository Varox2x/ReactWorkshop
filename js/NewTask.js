import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {useState} from "react";

export default ({onNewTask, refresh}) => {

    const [newTask, setNewTask] = useState({title: "", description: "", status: "open"})

    function typing(e){
        setNewTask({...newTask,
        [e.target.name]: e.target.value
        })
    }

    function clickAddNewTask(e){
        e.preventDefault();
        onNewTask(newTask,refresh);
        setNewTask({title: "", description: "", status: "open"});
    }


    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="title"
                               placeholder="Title"
                               value={newTask.title}
                               onChange={(e) => typing(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="description"
                               placeholder="Description"
                               value={newTask.description}
                               onChange={(e) => typing(e)}
                        />
                    </div>
                    <button onClick={(e) => clickAddNewTask(e)} className="btn btn-info">
                        Add task
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
            </div>
        </div>

    )
}