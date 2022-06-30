import React, {useEffect} from "react";
import API_URL from "../stringBinds/API_URL";
import API_KEY from "../stringBinds/API_KEY";


export default (data,fresh) =>{
    fetch(`${API_URL()}/tasks`, {
        headers: {
            Authorization: API_KEY(),
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(r => {
        r.json().then(e => {
            console.log(e);
            fresh();
        })
    })
}

//podajesz {title: "test", description: "testowe", status: "open"}