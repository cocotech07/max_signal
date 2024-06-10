import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./LandingPage/Home";
import UserRoute from "./Routes/UserRoute";
import User from "./Dashboard/User";
import DashboardHome from "./Dashboard/DashboardHome";
import AdminRoute from "./Routes/AdminRoute";
import Admin from "./Admin/Admin";
import AdminHome from "./Admin/AdminHome";
import Login from "./Auth/Login";

const App = () => {
    const router = createBrowserRouter([
        {path: "", element: <Home />},
        {path: "/login", element: <Login />},
        {
            path: "/user",
            element: <UserRoute element={<User />}></UserRoute>,
            children: [
                {
                    path: "",
                    element: <DashboardHome />,
                },
            ],
        },
        {
            path: "/admin",
            element: <AdminRoute element={<Admin />}></AdminRoute>,
            children: [
                {
                    path: "",
                    element: <AdminHome />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
