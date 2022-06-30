import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import getTasks from "./functions/getTasks";
import addTask from "./functions/addTask";
import deleteTask from "./functions/deleteTask";
import getOperations from "./functions/getOperations";
import addOperation from "./functions/addOperation";
import getSingleOperation from "./functions/getSingleOperation";
import updateTask from "./functions/updateTask";
import updateOperation from "./functions/updateOperation";
import deleteOperation from "./functions/deleteOperation";
import NewTask from "./NewTask";
import Task from "./Task";

function App() {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
      update();
  },[])

    function update(){
        getTasks(setTasksList);
    }

  return (
      <>
        <NewTask refresh={update}  onNewTask={addTask}/>
        {tasksList.map( (data, index) => {
          return (
              <Task refresh={update} status={data.status} key={index} description={data.description} title={data.title} id={data.id}/>
          )
        })}
      </>

  )
}

ReactDOM.render(<App/>, document.querySelector("#app"));