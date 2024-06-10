import React from "react";
import {Navigate} from "react-router-dom";

interface AdminRouteProps {
    // path: string;
    element: React.ReactNode;
    children?: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({element, children}) => {
    const userToken = "true";
    const isAdmin = true;

    return userToken && isAdmin ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to="/login" replace />
    );
};

export default AdminRoute;
