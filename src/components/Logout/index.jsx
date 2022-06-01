import { logout } from "../../Contexts/auth";
import "../Logout/logout.css"

function ButtonLogout() {
    
    const handleLogout = () => {
        logout();
    }
    return (
        <nav className="container-logout">
        <button onClick={handleLogout} className="logout">Sair</button>
        </nav>
    )
}
export default ButtonLogout 