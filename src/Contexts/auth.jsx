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
         console.log("login auth", {email, password}); //ao criar novo usuario ele passa por aquiS
        // const response = signIn(email, password)
        // console.log("login", response)
        
       
        const loggedUser ={
            id:"123",
            email,
        }
        const token = login.token

    // const login = async(email, password) => {
    //     const response = await signIn(email, password);

    //     // console.log("login", response.data); CERTO
    //     console.log("login", response);
       
    //     // const loggedUser = response.data.user;
    //     // const token = response.data.token;
    //     const loggedUser = response.user;
    //     const token = response.token;

         localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem('token', token);

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
            { children }
        </AuthContext.Provider>
    );
};