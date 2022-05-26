import logo from "../../Pages/Style/Images/logo-.png"
import Register from "../../components/Register";
import Imagem from "../../components/Logo";
import './page-register.css'

function RegisterPage() {
    return (
        <div className='main'>
            <div className='container'>
                <Imagem nome="Logo-buguer" foto={logo} />
                <h1 className="h1">Cadastre-se</h1>
                <Register />
            </div>
        </div>
    )
}

export default RegisterPage