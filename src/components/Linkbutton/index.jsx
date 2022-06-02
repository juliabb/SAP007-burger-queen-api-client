import { Link, useNavigate } from "react-router-dom";
import "./linkbutton.css"
import { logout } from "../../Contexts/auth";

function LinkButton() {
    const navigate = useNavigate()

    const handleLogout = () => {
        logout();
        navigate("/");
    }
    return (
        <nav className="container-logout">
            <Link to="/home">Voltar</Link>
            <button onClick={handleLogout} className="logout">Sair</button>
        </nav>
    )
}
export default LinkButton 