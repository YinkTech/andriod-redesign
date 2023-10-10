import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../components/App";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} exact />
      </Routes>
    </div>
  );
};

export default Routers;
