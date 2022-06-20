import logo from "../../Pages/Style/Images/logo-name.png";
import "./header.css";

function Header() {
    return (
        <header className="container-top">
        <img src={logo} alt='Mr Simpsons' className='mr-simpsons' />
        </header>
    );
}
export default Header;