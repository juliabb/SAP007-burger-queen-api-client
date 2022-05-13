import './home.css'

export function Home() {
  return (
    <div className='main'>
    <div className='container'>
     <h1>Login</h1>
     <input type="text" placeholder="Login"/>
     <input type="text" placeholder="Senha"/>
     <button type="button">Entrar</button>
    </div>
    </div>
  );
}