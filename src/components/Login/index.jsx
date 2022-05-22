import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
// import { createSession } from "../../Pages/services/data";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import './login.css'

function Login() {

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const buttonSubmit = (e) => {
        e.preventDefault();

        // console.log("submit", { email, password });
        login(email, password)
    }

    return (
        <form className="form" onSubmit={buttonSubmit}>
            <p>{String(authenticated)}</p>
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button />
            <p>Não possui conta? <Link to="/register" className="register">Cadastre-se</Link></p>
        </form>
    )
}

export default Login