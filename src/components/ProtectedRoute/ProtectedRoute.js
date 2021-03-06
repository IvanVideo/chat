import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    return props.loggedIn ? <Outlet /> : <Navigate to='/signin' />
};

export default ProtectedRoute;