import React from "react";

export default function UserManagement() {
  const users = [
    {
      name: "Sarah Johnson",
      email: "admin@pharmguard.com",
      role: "Admin",
      status: "Active",
      created: "12/31/2023",
    },
    {
      name: "John Martinez",
      email: "john.m@pharmguard.com",
      role: "Pharmacist",
      status: "Active",
      created: "1/14/2024",
    },
    {
      name: "Alice Williams",
      email: "alice.w@pharmguard.com",
      role: "Storekeeper",
      status: "Active",
      created: "1/31/2024",
    },
    {
      name: "Abdulsallam Fatiha",
      email: "abdulsalamdamilola15@gmail.com",
      role: "Pharmacist",
      status: "Active",
      created: "2/18/2026",
    },
    {
      name: "Desire George",
      email: "georgedesire06@gmail.com",
      role: "Storekeeper",
      status: "Inactive",
      created: "2/18/2026",
    },
  ];

  // ✅ COUNT USERS HERE (ABOVE RETURN)
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive",
  ).length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">User Management</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm">
          + Add User
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b text-sm text-gray-500">
              <th className="py-3">Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3">{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      user.role === "Admin"
                        ? "bg-blue-100 text-blue-600"
                        : user.role === "Pharmacist"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td>{user.created}</td>

                <td>
                  <button className="text-red-500 hover:underline text-sm">
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-6">
          Total users: {users.length} ({activeUsers} active, {inactiveUsers}{" "}
          inactive)
        </p>
      </div>
    </div>
  );
}
