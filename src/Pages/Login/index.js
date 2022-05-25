import Login from "../../components/Login";
import ButtonLogout from "../../components/Button/Button-logout";

import './Login.css'
import LogoBurguer from "../../components/LogoBurguer";

const LoginPage = () => {
  
    return (
        <div className='main'>
            <div className='container'>
                <LogoBurguer />
                <h1>Login</h1>
                <Login />
                {/* <ButtonLogout /> */}
            </div>
        </div>
    )
}
export default LoginPage