import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Kitchen from "./Pages/Kitchen"
import Salon from "./Pages/Salon"
import NoPage from "./Pages/NoPage"

import { AuthProvider, AuthContext } from "./Contexts/auth";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticaded } = useContext(AuthContext);
    if (!authenticaded) {
      return <Navigate to="/login" />;
    }
    return children;
  }
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
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