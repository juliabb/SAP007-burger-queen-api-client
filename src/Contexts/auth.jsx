import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login auth", { email, password });

        if (password === "123456") {
            setUser({ id: "123", email });
            navigate("/salon")
        }
    };

    const logout = () => {
        console.log("logout");
        setUser(null);
        navigate("/login")
    };
    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, login, logout }}
>
            {children}
        </AuthContext.Provider>
    );
};