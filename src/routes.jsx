import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Kitchen from "./Pages/Kitchen"
import Salon from "./Pages/Salon"
import NoPage from "./Pages/NoPage"
import Register from "./Pages/LoginPage/Register";
// import Home from "./Pages/Home";

import { AuthProvider, AuthContext } from "./Contexts/auth";

const AppRoutes = () => {
   const Private = ({ children }) => { 
     const { authenticaded, loading } = useContext(AuthContext);
  //   const { authenticaded, loading } = useContext(AuthContext); //Verificar se esta autenticação
   
     if (loading) {
       return <div className="loading">Carregando...</div> // Css aqui
     }
    
     if (!authenticaded) { //se usuario não autenticado enviar para Login
       return <Navigate to="/login" />;
     }
     return children; //se usuario autenticado acessa a rota privada
   }
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/kitchen" element={
            <Private>
              <Kitchen />
            </Private>
          } />
          <Route exact path="/salon" element={
            <Private>
              <Salon />
            </Private>
          } />
          <Route exact path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default AppRoutes