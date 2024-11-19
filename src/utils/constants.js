import Login from "../components/pages/Login";



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
        // HOME: {
        //     path: "/home",
        //     element: <Dashboard />,
        //     pageName: "Dashboard",
        //     sidebar: {
        //         show: true,
        //         icon: HomeIcon,
        //     },
        //     permissionName: "ViewDashboard"
        // },
        // TASKS: {
        //     path: "/tasks",
        //     element: <Tasks />,
        //     pageName: "Tasks",
        //     sidebar: {
        //         show: true,
        //         icon: TasksIcon,
        //     },
        //     permissionName: "ViewTasks"
        // },
        // FORMS: {
        //     path: "/forms",
        //     element: <Forms />,
        //     pageName: "Forms",
        //     sidebar: {
        //         show: true,
        //         icon: FormsIcon,
        //     },
        //     permissionName: "ViewForms"
        // },
        // NEW_FORMS: {
        //     path: "forms/newforms",
        //     element: <NewForm />,
        //     showBackIcon: true,
        // },
        // FORMS_ID: {
        //     path: "forms/:formId",
        //     element: <NewForm />,
        //     showBackIcon: true,
        // },
    },
}