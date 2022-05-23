import React, { useState } from "react";
import { createNewUser } from "../../Pages/Services/data"
import { useNavigate } from "react-router-dom";
import Button from "../Button";
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
        console.log("Email já cadastrado!");
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
    return (
        <form className="form" onSubmit={buttonSubmit}>
            <input type="radio" name="role" value="kitchen" className="role" onChange={(e) => setRole(e.target.value)} />
            <label>Cozinha</label>
            <input type="radio" name="role" value="hall" className="role" onChange={(e) => setRole(e.target.value)} />
            <label>Atendimento</label>
            <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button />
        </form>
    )
}

export default FormRegister