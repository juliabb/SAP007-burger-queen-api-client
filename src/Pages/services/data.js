import { getToken } from "../../Contexts/auth";
// const url = 'https://lab-api-bq.herokuapp.com';
// const apiProducts = `${url}/products/`;
// const token = getToken()


export const createNewUser = async (name, email, password, role) => {
  return await fetch('https://lab-api-bq.herokuapp.com/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "Mr Simpsons",
    }),
  }).then(res => res.json())
    .catch((error) => {
      console.log(error)
    })
};

export const signIn = async (email, password) => {
  return await fetch('https://lab-api-bq.herokuapp.com/auth', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(res => res.json())
    .catch((error) => {
      console.log(error)
    })
};


export const allProducts = () => {
  return fetch('https://lab-api-bq.herokuapp.com/products', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken("token"),
    },
  })
};

