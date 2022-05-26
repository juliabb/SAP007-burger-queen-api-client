import React, { useState } from "react";
import { signIn } from "../../Pages/services/data";
import { validEmail, validPassword } from "../../Pages/Authentication";
import { Link, useNavigate } from "react-router-dom";
import Errors from "../../Pages/Error/error";
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
                    console.log("E-mail ou senha inválidos");
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
                    console.log(response.code);
                    setError(Errors(response.code))
                }
            }).catch((error) => console.log(error))
    };

    const validate = () => {
        if (!validEmail.test(email)) {
            //    alert("Email invalido");
        }
        if (!validPassword.test(password)) {
            //    alert("Senha Invalida");
        }
    };

    return (
        <form className="form" onSubmit={buttonSubmit}>
            {/* {message && <Message type="error" msg={message} />} */}
            {error && <MessageError type="error" msg={error} />}
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={validate} className="buttonSubmit">Entrar</button>
            <p>Não possui conta? <Link to="/register" className="register">Cadastre-se</Link></p>
        </form>
    )
}

export default Login