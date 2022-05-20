import React, { useState, useContext } from "react";
import { createNewUser } from "../../Pages/services/data"
import { saveToken, saveRole } from "../../Pages/services/token";
import { AuthContext } from "../../Contexts/auth";
import Button from "../Button";
import './register.css'


function Register() {

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const buttonSubmit = (e) => {
        e.preventDefault();
        createNewUser(name, email, password, role)
            .then((data) => {
                console.log("submit", { name, email, password, role });
                login(name, email, password, role)
                console.log(data);
                    saveToken(data.token);
                    saveRole(data.role);
            })
            .cath((error) => console.log(error));
        // login(email, password)
    }
    return (
        <form className="form" onSubmit={buttonSubmit}>
            <p>{String(authenticated)}</p>
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

export default Register