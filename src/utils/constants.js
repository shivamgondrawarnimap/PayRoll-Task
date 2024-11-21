import Dashboard from "../components/pages/dashboard/Dashboard";
import Login from "../components/pages/login/Login";
import MyTeam from "../components/pages/myteam/MyTeam";



export const PATH = {

    publicRoutes: {
        LOGIN: {
            path: '/login',
            element: Login
        },
        // FORGOT_PASSWORD: {
        //     path: "/forgot-password",
        //     element: ForgotPassword
        // },
    },
    privateRoutes: {
        HOME: {
            path: "/home",
            element: <Dashboard />,
            pageName: "Dashboard",
            // sidebar: {
            //     show: true,
            //     icon: HomeIcon,
            // },
            permissionName: "ViewDashboard"
        },
        MY_TEAM: {
            path: "/myteam",
            element: <MyTeam />,
            pageName: "MyTeam",
            // sidebar: {
            //     show: true,
            //     icon: TasksIcon,
            // },
            permissionName: "ViewTasks"
        },
    },
}