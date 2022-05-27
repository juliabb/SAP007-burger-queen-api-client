import React, { useState } from "react";
import { createNewUser } from "../../Pages/services/data"
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../Pages/Authentication";
import './register.css'


function FormRegister() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate()

  const buttonSubmit = (e) => {
    e.preventDefault();

    createNewUser(name, email, password, role)
      .then((response) => {
        if (response.code === 403) {
          console("Email já cadastrado!");
        } else {
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.id);
          localStorage.setItem('email', response.email);
          localStorage.setItem('role', response.role);

          if (response.role === "hall") {
            navigate("/salon")
          }
          else if (response.role === "kitchen") {
            navigate("/kitchen")
          }
        }
      })
      .catch((errors) => {
        console.log(errors)
      });

  }

  const validate = () => {
    if (!validateEmail(email)) {
        // console.log("Email invalido");
    }
    if (!validatePassword(password)) {
        // console.log("Senha Invalida");
    }
};

  return (
    <form className="form" onSubmit={buttonSubmit}>
      <div className="radio">
        <input type="radio" name="role" value="kitchen" id="kitchen" className="role" onChange={(e) => setRole(e.target.value)} />
        <label htmlFor="kitchen"><span></span>Cozinha</label>
        <input type="radio" name="role" value="hall" id="hall" className="role" onChange={(e) => setRole(e.target.value)} />
        <label htmlFor="hall"><span></span>Atendimento</label>
      </div>
      <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={validate} className="buttonSubmit">Entrar</button>
    </form>
  )
}

export default FormRegister