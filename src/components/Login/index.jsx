import React, { useState } from "react";
import { signIn } from "../../Pages/services/data";
import { validateEmail, validatePassword } from "../../Pages/Authentication";
import { Link, useNavigate } from "react-router-dom";
import { Errors } from "../../Pages/Error/error"
import MessageError from "../Message";
import './login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const buttonSubmit = (e) => {
        e.preventDefault();

        signIn(email, password)
            .then((response) => {
                if (response.code === 400) { 
                    const codeError = JSON.parse(response.code)
                    setError(Errors(codeError))
                }
                else {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('id', response.id);
                    localStorage.setItem('email', response.email);
                    localStorage.setItem('role', response.role);

                    if (response.role === "hall") {
                        navigate("/salon")
                    }
                    else if (response.role === "kitchen") {
                        navigate("/kitchen");
                    }                    
                }
            }).catch((error) => console.log(error))
    };

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
            {error && <MessageError type="error" msg={error} />}
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={validate} className="buttonSubmit">Entrar</button>
            <p>Não possui conta? <Link to="/register" className="register">Cadastre-se</Link></p>
        </form>
    )
}

export default Login