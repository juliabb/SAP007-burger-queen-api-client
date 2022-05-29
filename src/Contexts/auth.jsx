import { useNavigate } from 'react-router-dom';

const navigate = useNavigate;

export const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        localStorage.removeItem("email")
        localStorage.removeItem("role")

        navigate("/login")
    };
