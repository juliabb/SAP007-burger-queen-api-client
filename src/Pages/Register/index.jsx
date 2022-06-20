import logo from "../../Pages/Style/Images/logo-.png";
import Register from "../../components/Register";
import Imagem from "../../components/Logo";
import Footer from "../../components/Footer";
import "./page-register.css";

function RegisterPage() {
    return (
        <div className='main'>
            <div className='container'>
                <Imagem nome="Logo-buguer" foto={logo} />
                <h1 className="h1-register">Cadastre-se</h1>
                <Register />
                <Footer />
            </div>
        </div>
    );
}

export default RegisterPage;