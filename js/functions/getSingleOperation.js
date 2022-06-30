import React, {useEffect} from "react";
import API_URL from "../stringBinds/API_URL";
import API_KEY from "../stringBinds/API_KEY";


export default (id) =>{
    fetch(`${API_URL()}/operations/${id}`, {
        headers: {
            Authorization: API_KEY(),
        },
    }).then(r => {
        r.json().then( data => {
            console.log(data.data)
            return data.data
        })
    })
}

//jako id podajesz id operacji nie taska