import React from "react";

const UserManagement = () => {
  // Mock data for users
  const users = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah@pharmguard.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 mins ago",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.pharmacist@pharmguard.com",
      role: "Pharmacist",
      status: "Active",
      lastLogin: "1 hour ago",
    },
    {
      id: 3,
      name: "John Smith",
      email: "john.storekeeper@pharmguard.com",
      role: "Storekeeper",
      status: "Inactive",
      lastLogin: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
          <p className="text-gray-500 text-sm">
            Manage access and roles for pharmacy staff.
          </p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium flex items-center gap-2">
          <span>+</span> Add New User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 font-semibold">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Login</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        user.status === "Active"
                          ? "bg-green-50 text-green-700 border-green-100"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          user.status === "Active"
                            ? "bg-green-500"
                            : "bg-gray-500"
                        }`}
                      ></div>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{user.lastLogin}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-primary transition-colors font-medium text-sm">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {users.length === 0 && (
          <div className="p-8 text-center text-gray-500">No users found.</div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
