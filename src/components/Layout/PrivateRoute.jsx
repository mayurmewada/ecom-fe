import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = () => {
    const token = localStorage.getItem("ddToken");
    return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
