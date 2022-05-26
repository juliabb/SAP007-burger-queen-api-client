import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../Pages/Services/data';

// const AuthContext = createContext({
//     token: null,
//     setToken() => {},
// })


// const Provider = ({children}) => {
//     const [token, setToken] = useStorage("token")

//     return (
//         <AuthContext.Provider
//             value={{token,
//             setToken,
//          }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// }
// };

// export default AuthContext

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         const recoverUser = localStorage.getItem("user");
//         if (recoverUser) {
//             setUser(JSON.parse(recoverUser));
//         }
//         setLoading(false)
//     }, []);

//     const logout = () => {
//         localStorage.removeItem("token")
//         navigate("/login")
//     };

//     return (
//         <AuthContext.Provider
//             value={{ authenticated: !!user, user, loading, signIn, logout }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };