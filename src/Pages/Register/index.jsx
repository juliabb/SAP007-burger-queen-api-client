import LogoBurguer from "../../components/LogoBurguer";
import Register from "../../components/Register";
import './page-register.css'

function RegisterPage() {
    return(
        <div className='main'>
        <div className='container'>
            <LogoBurguer />
            <h1 className="h1">Cadastre-se</h1>
            <Register />
        </div>
    </div>
        )
    }

    export default RegisterPage