import React, { useState } from "react";
import { signIn } from "../../Pages/services/data";
import { validEmail, validPassword } from "../../Pages/Authentication";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { codeError } from "../../Pages/Error/error";
import MessageError from "../Message";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  let message = " ";
  if (location.state) {
    message = location.state.message;
  }
  
  const validate = (e) => {
    e.preventDefault();
    if (!validEmail.test(email)) {
      //    alert("Email invalido");
    }
    if (!validPassword.test(password)) {
      //    alert("Senha Invalida");
    }
    signIn(email, password)
    .then((response) => {
      if (response.code === 200) {
        console.log("ENTROU");
        localStorage.setItem("token", response.token);
        localStorage.setItem("id", response.id);
        localStorage.setItem("email", response.email);
        localStorage.setItem("role", response.role);
        if (response.role === "hall") {
            navigate("/salon");
          } else if (response.role === "kitchen") {
            navigate("/kitchen");
          }
    }
    console.log("Código erro", response.message);
    setError(codeError(response));
}).catch((error) => console.log("Catch", error));
  };

  return (
    <form className="form">
     {message && <MessageError type="error" msg={message} />}
      {error && <MessageError type="error" msg={error} />}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={validate} className="buttonSubmit">
        Entrar
      </button>
      <p>
        Não possui conta?{" "}
        <Link to="/register" className="register">
          Cadastre-se
        </Link>
      </p>
    </form>
  );
}

export default Login;
