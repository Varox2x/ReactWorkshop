import API_URL from "../stringBinds/API_URL";
import API_KEY from "../stringBinds/API_KEY";


export default (id) => {
    fetch(`${API_URL()}/operations/${id}`, {
        headers: {
            Authorization: API_KEY(),
            "Content-Type": "application/json"
        },
        method: "DELETE",
    }).then(r => {
        r.json().then(e => {
            console.log(e)
        })
    })
}

//podajesz id operacji