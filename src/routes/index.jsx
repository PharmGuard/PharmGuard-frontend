import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/Dashboard/Overview";
import UserManagement from "../pages/Dashboard/UserManagement";
import AuditTrail from "../pages/Dashboard/AuditTrail";

export const routes = [
  {
    path: "/",
    element: <Home />,
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
