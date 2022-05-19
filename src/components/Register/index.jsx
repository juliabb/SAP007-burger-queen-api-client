import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import Button from "../Button";
import './register.css'


function Register() {

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const buttonSubmit = (e) => {
        e.preventDefault();

        console.log("submit", { email, password });
        login(email, password)
    }
    return (
        <form className="form" onSubmit={buttonSubmit}>
            <p>{String(authenticated)}</p>
            <select className="select" required>
                <option disabled selected className="select-items">Cargo</option>
                <option value="valor2" className="select-items">Cozinha</option>
                <option value="valor3" className="select-items">Atendimento</option>
            </select>
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button />
        </form>
    )
}

export default Register