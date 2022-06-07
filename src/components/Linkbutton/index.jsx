import { Link, useNavigate } from "react-router-dom";
import "./linkbutton.css"
import { logout } from "../../Contexts/auth";

function LinkButton() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("value")
        logout();
        navigate("/");
    }
    return (
        <nav className="container-logout">
            <Link to="/home" className="return">Voltar </Link>
            <button onClick={handleLogout} className="logout">Sair</button>
        </nav>
    )
}
export default LinkButton 