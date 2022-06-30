import API_URL from "../stringBinds/API_URL";
import API_KEY from "../stringBinds/API_KEY";

export default (id, data) =>{
   return fetch(`${API_URL()}/tasks/${id}/operations`, {
        headers: {
            Authorization: API_KEY(),
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(r => r.json())

    // r.json().then(e => {
    //     console.log(e);
    //     ref();
    // }).catch(err => console.log(err))
}

//w data podajesz {description: "", timeSpent: 0} a w id taska