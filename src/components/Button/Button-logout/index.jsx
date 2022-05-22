import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/auth"

function ButtonLogout() {

    const { logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout();

    }

    return (
        <button onClick={handleLogout}>Sair</button>
    )
}
export default ButtonLogout