import React, { useState } from "react";
import logo from "../Style/Images/logo-.png"
import './LoginPage.css'

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const buttonSubmit = (e) => {
        e.preventDefault();

        console.log("submit", { email, password});
    }


    return (
        <div className='main'>
            <div className='container'>
                <img src={logo} alt='Logo Mr Simpsons' className='logo-hommer' />
                <h1>Login</h1>
                <form className="form" onSubmit={buttonSubmit}>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" className="button">Entrar</button>
                </form>
            </div>
        </div>
    )
}
export default LoginPage