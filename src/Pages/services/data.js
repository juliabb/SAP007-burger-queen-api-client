const url = "https://lab-api-bq.herokuapp.com"

export const createNewUser = (name, email, password, role) => {
    return fetch(url,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ 
            name: name,
            email: email,
            password: password,
            role: role,
        })
    })
    .then(function(response) {
        console.log(response);
        console.log(response.status);
        console.log(response.json());
        console.log(response.text());
    }).then(response => response.json())
    .catch(function(err) {  
           console.log('Fetch Error :-S', err);  
    });
    
}

export const createSession = async (email,password) => {
    return fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    .then(response => response.json())
    .catch(error => console.error(error))
}
