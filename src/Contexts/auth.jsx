import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoverUser = localStorage.getItem("user");
        if (recoverUser){
            setUser(JSON.parse(recoverUser));
        }
        setLoading(false)
    }, []);

    const login = (email, password) => {
        console.log("login auth", {email, password});
       
        const loggedUser ={
            id:"123",
            email,
        }

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if (password === "123456") { //se senha estiver correta
            setUser({ loggedUser });
            navigate("/Kitchen")
        }
    };

    const logout = () => {
        localStorage.removeItem("user")
        setUser(null);
        navigate("/login")
    };
    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, login, logout }}
>
            {children}
        </AuthContext.Provider>
    );
};