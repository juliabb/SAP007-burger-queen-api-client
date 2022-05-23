import LogoBurguer from "../../components/LogoBurguer";
import Register from "../../components/Register";

function RegisterPage() {
    return(
        <div className='main'>
        <div className='container'>
            <LogoBurguer />
            <h1>Cadastre-se</h1>
            <Register />
        </div>
    </div>
        )
    }

    export default RegisterPage