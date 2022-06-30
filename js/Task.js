import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
import getOperations from "./functions/getOperations";
import Operation from "./Operation";
import addOperation from "./functions/addOperation";
import deleteTask from "./functions/deleteTask";
import updateTask from "./functions/updateTask";

export default ({title, description, id, status, onRemoveTask, refresh}) => {

    const [showAddOperation, setShowAddOperation] = useState(false);
    const [operationsList, setOperationList] = useState([]);
    const [addOperationText, setAddOperationText] = useState({description: "", timeSpent: 0});


    useEffect( () => {
        updateOperationToState()
    },[])

    function updateOperationToState(){
        getOperations(id, setOperationList);
    }

    function typing(e){
        setAddOperationText({...addOperationText,
            [e.target.name]: e.target.value
        })
    }

    function pressAdd(e){
        e.preventDefault()
        // addOperation(id,addOperationText, updateOperationToState);
        addOperation(id, addOperationText)
            .then(updateOperationToState);

        setAddOperationText({description: "", timeSpent: 0});
    }

    function clickdeleteTask(){
        deleteTask(id, refresh)
    }

    function clickedFinish(e){
        e.preventDefault();
        updateTask({title: title, description: description, status: "closed"}, id, refresh)
    }

    return (
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{title}</h5>
                    <h6 className="card-subtitle text-muted">{description}</h6>
                </div>
                <div>

                      {/*Przyciski "Add operation" i "Finish" mają być widoczne */}
                      {/*tylko jeżeli status zadania jest "open" */}

                    <button style={{display: (status === `closed`)? "none" : "inline-block"}} onClick={() => setShowAddOperation(!showAddOperation)} className="btn btn-info btn-sm mr-2">
                        Add operation
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>

                    <button onClick={(e) => clickedFinish(e)} style={{display: (status == `closed`)? "none" : "inline-block"}} className="btn btn-dark btn-sm">
                        Finish
                        <i className="fas fa-archive ml-1"></i>
                    </button>


                      {/*Przycisk usuwania ma być widoczny tylko */}
                      {/*jeżeli nie ma żadnych operacji w zadaniu*/}
                    <button onClick={() => clickdeleteTask()} style={{display: (operationsList.length === 0)? "inline-block" : "none"}} className="btn btn-outline-danger btn-sm ml-2">
                        <i className="fas fa-trash false"></i>
                    </button>
                </div>
            </div>
            <div style={{display: showAddOperation? "block" : "none"}} className="card-body">
                <form>
                    <div className="input-group">
                        <input name={"description"} onChange={(e) => typing(e)} value={addOperationText.description} type="text" className="form-control" placeholder="Operation description"/>

                        <div className="input-group-append">
                            <button onClick={(e) => pressAdd(e)} className="btn btn-info">
                                Add
                                <i className="fas fa-plus-circle ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <ul className="list-group list-group-flush">
                {operationsList.map((el,index) => {
                    return (
                        <Operation refresh={updateOperationToState} key={index} operation={el}/>
                    )
                })}
            </ul>

        </section>

    )
}