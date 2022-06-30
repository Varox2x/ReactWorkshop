import React, {useEffect} from "react";
import API_URL from "../stringBinds/API_URL";
import API_KEY from "../stringBinds/API_KEY";


export default (func) =>{
    fetch(`${API_URL()}/tasks`, {
        headers: {
            Authorization: API_KEY(),
        },
    }).then(r => {
        r.json().then( data => {
            console.log(data.data)
            func(data.data);
        })
    })
}

//zwraca tablice z obiektami