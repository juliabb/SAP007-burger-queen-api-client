import React, { useState, useContext } from "react";
import { AuthContext} from "../../Contexts/auth";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import './LoginPage.css'
import LogoBurguer from "../../components/LogoBurguer";

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const buttonSubmit = (e) => {
        e.preventDefault();

        console.log("submit", { email, password });
        login(email, password)
    }

    return (
        <div className='main'>
            <div className='container'>
                <LogoBurguer />
                <h1>Login</h1>
                {/* <p>{String(authenticated)}</p> */}
                <form className="form" onSubmit={buttonSubmit}>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button />
                    <Link to ="/register">Registre-se</Link>
                </form>
            </div>
        </div>
    )
}
export default LoginPage