const applicationState = {
    requests:[]
}

const API = "http://localhost:8088"
export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(
            (response) => {
                const parsedData = response.json()
                return parsedData
            }
        )
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
                //console.log(applicationState.requests)
            }
        )
}
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            const mainContainer = document.querySelector("#container")
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                const mainContainer = document.querySelector("#container")
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}