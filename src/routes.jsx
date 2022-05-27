
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Login from "./Pages/Login";
import Kitchen from "./Pages/Kitchen"
import Salon from "./Pages/Salon"
import NoPage from "./Pages/NoPage"
import Register from "./Pages/Register";
import Home from "./Pages/Home";

const Private = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  // console.log("isAuth: ", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <Private redirectTo="/">
              <Home />
            </Private>
          }
        />
        <Route
          path="/kitchen"
          element={
            <Private redirectTo="/">
              <Kitchen />
            </Private>
          }
        />
        <Route
          path="/salon"
          element={
            <Private redirectTo="/">
              <Salon />
            </Private>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes