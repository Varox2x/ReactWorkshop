import React, {useEffect} from "react";
import API_URL from "../stringBinds/API_URL";
import API_KEY from "../stringBinds/API_KEY";


export default (data,id,ref) =>{
    fetch(`${API_URL()}/operations/${id}`, {
        headers: {
            Authorization: API_KEY(),
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(data)
    }).then(r => {
        r.json().then(e => {
            console.log(e);
            ref();
        })
    })
}

//podajesz {description: "", timeSpent: 0} oraz id operacji