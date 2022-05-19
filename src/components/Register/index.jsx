import React, {useState, useContext} from "react";
import { AuthContext } from "../../Contexts/auth";
import Button from "../Button";
import './register.css'


function Register(){

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const buttonSubmit = (e) => {
        e.preventDefault();

        console.log("submit", { email, password });
        login(email, password)
    }
    return(
        <form className="form" onSubmit={buttonSubmit}>
                <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button />
            </form>
    )
}

export default Register