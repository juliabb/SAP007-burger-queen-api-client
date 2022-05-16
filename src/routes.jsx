import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Kitchen from "./Pages/Kitchen"
import Salon from "./Pages/Salon"
import NoPage from "./Pages/NoPage"


export default function AppRoute() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route exact path="/kitchen" element={<Kitchen/>} />
          <Route exact path="/salon" element={<Salon/>} />
          <Route exact path="*" element={<NoPage/>} />
        </Routes>
      </Router>
    );
    }





    /*  <BrowserRouter>
       <Routes>
         <Route path="/" element={<LoginPage />}>
           <Route path="Kitchen" element={<Kitchen />} />
           <Route path="Salon" element={<Salon />} />
           <Route path="*" element={<NoPage />} />
         </Route>
       </Routes>
     </BrowserRouter> */