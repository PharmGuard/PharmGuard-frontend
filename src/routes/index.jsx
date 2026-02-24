import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/Dashboard/Admin/Overview";
import UserManagement from "../pages/Dashboard/Admin/UserManagement";
import AuditTrail from "../pages/Dashboard/Admin/AuditTrail";
import Login from "../pages/Auth/Login";
import VerifyAccount from "../pages/Auth/VerifyAccount";
import VerifySuccess from "../pages/Auth/VerifySuccess";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import ResetSuccess from "../pages/Auth/ResetSuccess";
import ProtectedRoute from "./ProtectedRoute";
import PharmacistOverview from "../pages/Dashboard/Pharmacist/Overview";
import StorekeeperOverview from "../pages/Dashboard/StockKeeper/Overview";

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
  {
    path: "/pharmacist-dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <PharmacistOverview />,
          },
          {
            path: "dispense",
            element: <div>Dispense Page</div>, // Placeholder
          },
          {
            path: "inventory",
            element: <div>Inventory Page</div>, // Placeholder
          },
        ],
      },
    ],
  },
  {
    path: "/storekeeper-dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <StorekeeperOverview />,
          },
          {
            path: "stock",
            element: <div>Stock Management Page</div>, // Placeholder
          },
          {
            path: "suppliers",
            element: <div>Suppliers Page</div>, // Placeholder
          },
        ],
      },
    ],
  },
];
