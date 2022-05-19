import Login from "../../components/Login";

import './LoginPage.css'
import LogoBurguer from "../../components/LogoBurguer";

const LoginPage = () => {
  
    return (
        <div className='main'>
            <div className='container'>
                <LogoBurguer />
                <h1>Login</h1>
                <Login />
            </div>
        </div>
    )
}
export default LoginPage