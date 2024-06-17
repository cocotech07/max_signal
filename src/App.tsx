import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./LandingPage/Home";
import UserRoute from "./Routes/UserRoute";
import User from "./Dashboard/User";
import DashboardHome from "./Dashboard/DashboardHome";
import AdminRoute from "./Routes/AdminRoute";
import Admin from "./Admin/Admin";
// import AdminHome from "./Admin/AdminHome";
import Login from "./Auth/Login";
import AllSchema from "./Dashboard/AllSchema";
import SchemaLogs from "./Dashboard/SchemaLogs";
import AllTransactions from "./Dashboard/AllTransactions";
import AddMoney from "./Dashboard/AddMoney";
import AddMoneyLog from "./Dashboard/AddMoneyLog";
import WalletExchange from "./Dashboard/WalletExchange";
import SendMoney from "./Dashboard/SendMoney";
import SendMoneyLog from "./Dashboard/SendMoneyLog";
import Withdraw from "./Dashboard/Withdraw";
import WithdrawLog from "./Dashboard/WithdrawLog";
import RankingBadge from "./Dashboard/RankingBadge";
import Settings from "./Dashboard/Settings";
import SupportTicket from "./Dashboard/SupportTicket";
import Users from "./Admin/Users";
import AdminTransactions from "./Admin/AdminTransactions";

const App = () => {
    const router = createBrowserRouter([
        {path: "", element: <Home />},
        {path: "/login", element: <Login />},
        {
            path: "user",
            element: <UserRoute element={<User />}></UserRoute>,
            children: [
                {
                    path: "dashboard",
                    element: <DashboardHome />,
                },
                {
                    path: "schemas",
                    element: <AllSchema />,
                },
                {
                    path: "invest-logs",
                    element: <SchemaLogs />,
                },
                {
                    path: "transactions",
                    element: <AllTransactions />,
                },
                {
                    path: "deposit",
                    element: <AddMoney />,
                },
                {
                    path: "deposit/log",
                    element: <AddMoneyLog />,
                },
                {
                    path: "wallet-exchange",
                    element: <WalletExchange />,
                },
                {
                    path: "send-money",
                    element: <SendMoney />,
                },
                {
                    path: "send-money/log",
                    element: <SendMoneyLog />,
                },
                {
                    path: "withdraw",
                    element: <Withdraw />,
                },
                {
                    path: "withdraw/log",
                    element: <WithdrawLog />,
                },
                {
                    path: "ranking-badge",
                    element: <RankingBadge />,
                },
                {
                    path: "settings",
                    element: <Settings />,
                },
                {
                    path: "support-ticket/index",
                    element: <SupportTicket />,
                },
            ],
        },
        {
            path: "admin",
            element: <AdminRoute element={<Admin />}></AdminRoute>,
            children: [
                {
                    path: "users",
                    element: <Users />,
                },
                {
                    path: "transactions",
                    element: <AdminTransactions />,
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
