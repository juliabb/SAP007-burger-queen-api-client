const url = "https://lab-api-bq.herokuapp.com"

export const createNewUser = (name, email, password, role, restaurant) => {
    return fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            role: role,
            restaurant: "mr simpsons"
        })
        // .then(response => response.json())
        // // .then(data => )
        // // .catch()
    })
}