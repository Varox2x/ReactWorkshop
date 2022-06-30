import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
import getOperations from "./functions/getOperations";
import deleteOperation from "./functions/deleteOperation";
import updateOperation from "./functions/updateOperation";

export default ({operation, refresh})=>{
    const [showAddTime, setShowAddTime] = useState(false);
    const [minutesText, setMinutesText] = useState(0);

    function clickedDelete(e){
        e.preventDefault();
        deleteOperation(operation.id, refresh)
    }

    function typing(e){
        setMinutesText(e.target.value)
    }

    function hideinput(e){
        e.preventDefault();
        setShowAddTime(!showAddTime);
    }

    function clickUpdateOperationTime(e){
        e.preventDefault();
        updateOperation({description: operation.description, timeSpent: minutesText}, operation.id, refresh)
        setShowAddTime(!showAddTime);
    }


    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {operation.description}
                {/*Czas wyświetlany tylko jeżeli większy od 0 */}
                <span style={{display: (operation.timeSpent !== 0)? "inline-block" : "none"}} className="badge badge-success badge-pill ml-2"> {(operation.timeSpent !== 0)? `${operation.timeSpent}m` : ""  } </span>
            </div>
            {/*Formularz wyświetlany po naciśnięciu "Add time", po zapisie czasu znika*/}
            <form style={{display: showAddTime? "inline-block" : "none"}}>
                <div className="input-group input-group-sm">
                    <input onChange={(e) => typing(e)} value={minutesText} type="number" className="form-control" placeholder="Spent time in minutes"
                           style={{width: "12rem"}}/>
                    <div className="input-group-append">
                        <button onClick={(e) => clickUpdateOperationTime(e)} className="btn btn-outline-success"><i className="fas fa-save"></i>
                        </button>
                        <button onClick={(e) => hideinput(e)}  className="btn btn-outline-dark"><i className="fas fa-times false"></i>
                        </button>
                    </div>
                </div>
            </form>

            {/*div wyświetlany domyślnie, znika po wciśnięciu "Add time"*/}
            <div>
                {/*Przycisk widoczny tylko jeżeli status zadania jest "open"*/}
                <button style={{display: showAddTime? "none" : "inline-block"}} onClick={() => setShowAddTime(!showAddTime)} className="btn btn-outline-success btn-sm mr-2">
                    Add time
                    <i className="fas fa-clock ml-1"></i>
                </button>

                <button onClick={(e) => clickedDelete(e)} className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"></i>
                </button>
            </div>
        </li>

    )
}