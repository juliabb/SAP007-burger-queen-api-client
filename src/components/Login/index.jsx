import React, { useState } from "react";
import { signIn } from "../../Pages/services/data";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import './login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const buttonSubmit = (e) => {
        e.preventDefault();

        signIn(email, password).then((response) => {
            if (response.code === 400) {
                console.log("E-mail ou senha inválidos");
            } else {
                localStorage.setItem('token', response.token);
                localStorage.setItem('id', response.id);
                if (response.role === "hall") {
                    // return <Navigate to="/hall" />
                }
                else if (response.role === "kitchen") {
                    //  navigate("/kitchen")
                }
            }
        }).catch((error) => {
            console.log(error)
        })
    };

    return (
        <form className="form" onSubmit={buttonSubmit}>
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button />
            <p>Não possui conta? <Link to="/register" className="register">Cadastre-se</Link></p>
        </form>
    )
}

export default Login