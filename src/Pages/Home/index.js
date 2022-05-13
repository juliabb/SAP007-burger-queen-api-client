import './home.css'
import logo from "../Style/Images/logo-.png"

export function Home() {
  return (
    <div className='main'>
    <div className='container'>
      <img src={logo} alt='Logo Mr Simpsons'/>
     <h1>Login</h1>
     <input type="text" placeholder="Login"/>
     <input type="text" placeholder="Senha"/>
     <button type="button">Entrar</button>
    </div>
    </div>
  );
}