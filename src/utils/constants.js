import Billing from "../components/pages/billing/Billing";
import Dashboard from "../components/pages/dashboard/Dashboard";
import Login from "../components/pages/login/Login";
import MyTask from "../components/pages/mytask/MyTask";
import MyTeam from "../components/pages/myteam/MyTeam";
import Setting from "../components/pages/setting/Setting";



export const PATH = {

    publicRoutes: {
        LOGIN: {
            path: '/login',
            element: Login
        },
    },
    privateRoutes: {
        DASHBOARD: {
            path: "/dashboard",
            element: <Dashboard />,
            pageName: "Dashboard",
        },
        MY_TEAM: {
            path: "/myteam",
            element: <MyTeam />,
            pageName: "MyTeam",
        },
        MY_TASK: {
            path: "/mytask",
            element: <MyTask />,
            pageName: "MyTask",
        },
        BILLING: {
            path: "/billing",
            element: <Billing />,
            pageName: "Billing",
        },
        SETTING: {
            path: "/setting",
            element: <Setting />,
            pageName: "Setting",
        },
    },
}