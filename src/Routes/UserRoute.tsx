import React from "react";
import {Navigate} from "react-router-dom";

interface UserRouteProps {
    // path: string;
    element: React.ReactNode;
    children?: React.ReactNode;
}

const UserRoute: React.FC<UserRouteProps> = ({element, children}) => {
    const userToken = true;

    return userToken ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to="/login" replace />
    );
};

export default UserRoute;
