import './home.css'
import logo from "../Style/Images/logo-.png"

export function Home() {

  function buttonClicked() {
    alert("Botão clicado!")
  }

  return (
    <div className='main'>
      <div className='container'>
        <img src={logo} alt='Logo Mr Simpsons' className='logo-hommer' />
        <h1>Login</h1> 
        <input type="text" placeholder="Login" />
        <input type="text" placeholder="Senha"/>
       <button type="button" onClick={buttonClicked}>Entrar</button>
    </div>
    </div>
  ); 
};