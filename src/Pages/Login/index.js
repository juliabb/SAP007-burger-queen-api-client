import Login from "../../components/Login";
import logo from "../../Pages/Style/Images/logo-.png";
import Footer from "../../components/Footer";
import Imagem from "../../components/Logo";
import "./login-page.css";

const LoginPage = () => {
  
    return (
        <div className='main'>
            <div className='container'>
                <Imagem nome="Logo-buguer" foto={logo} />
                <h1 className="h1">Login</h1>
                <Login />
            </div>
            <Footer />
        </div>
    );
};
export default LoginPage;