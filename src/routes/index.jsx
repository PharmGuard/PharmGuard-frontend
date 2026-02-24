import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/Dashboard/Overview";
import UserManagement from "../pages/Dashboard/UserManagement";
import AuditTrail from "../pages/Dashboard/AuditTrail";
import Login from "../pages/Auth/Login";
import VerifyAccount from "../pages/Auth/VerifyAccount";
import VerifySuccess from "../pages/Auth/VerifySuccess";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import ResetSuccess from "../pages/Auth/ResetSuccess";
import ProtectedRoute from "./ProtectedRoute";

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
      {
        path: "verify-account",
        element: <VerifyAccount />,
      },
      {
        path: "verify-success",
        element: <VerifySuccess />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "reset-success",
        element: <ResetSuccess />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
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
    ],
  },
];
