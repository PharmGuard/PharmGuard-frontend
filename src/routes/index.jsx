import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/Dashboard/Overview";
import UserManagement from "../pages/Dashboard/UserManagement";
import AuditTrail from "../pages/Dashboard/AuditTrail";
import Login from "../pages/Auth/Login";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      //{
      //   path: "register",
      //   element: <Register />,
      // },
      // {
      //   path: "forgot-password",
      //   element: <ForgotPassword />,
      // },
      // {
      //   path: "reset-password",
      //   element: <ResetPassword />,
      // }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "audit-trail",
        element: <AuditTrail />,
      },
    ],
  },
];
