import React, { useState, useContext } from "react";
import { AuthContext } from "../../../Contexts/auth";
import LogoBurguer from "../../../components/LogoBurguer";
import Button from "../../../components/Button";

function Register() {

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const buttonSubmit = (e) => {
        e.preventDefault();

        console.log("submit", { email, password });
        login(email, password)
    }
    return(
        <div className='main'>
        <div className='container'>
            <LogoBurguer />
            <h1>Cadastre-se</h1>
            {/* <p>{String(authenticated)}</p> */}
            <form className="form" onSubmit={buttonSubmit}>
                <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button />
            </form>
        </div>
    </div>
        )
    }

    export default Register