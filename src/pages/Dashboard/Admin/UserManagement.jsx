import React from "react";

const UserIcon = () => (
  <svg
    className="w-4 h-4 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
    />
    <circle cx="9" cy="7" r="4" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
    />
  </svg>
);

const AddUserIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
    />
  </svg>
);

const DeactivateIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
    />
    <circle cx="9" cy="7" r="4" />
    <line x1="17" y1="8" x2="23" y2="14" strokeLinecap="round" />
    <line x1="23" y1="8" x2="17" y2="14" strokeLinecap="round" />
  </svg>
);

const users = [
  {
    username: "Sarah Johnson",
    email: "admin@pharmguard.com",
    role: "Admin",
    status: "Active",
    created: "12/31/2023",
  },
  {
    username: "John Martinez",
    email: "john.m@pharmguard.com",
    role: "Pharmacist",
    status: "Active",
    created: "1/14/2024",
  },
  {
    username: "Alice Williams",
    email: "alice.w@pharmguard.com",
    role: "Storekeeper",
    status: "Active",
    created: "1/31/2024",
  },
  {
    username: "Abdus-salam Fatiha",
    email: "abdussalamdamilola15@gmail.com",
    role: "Pharmacist",
    status: "Active",
    created: "2/18/2026",
  },
  {
    username: "Desire George",
    email: "geaorgedesire06@gmail.com",
    role: "Storekeeper",
    status: "Inactive",
    created: "2/18/2026",
  },
];

const roleBadge = (role) => {
  const styles = {
    Admin: "bg-blue-100 text-blue-600",
    Pharmacist: "bg-orange-100 text-orange-500",
    Storekeeper: "bg-teal-100 text-teal-600",
  };
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${styles[role] || "bg-gray-100 text-gray-500"}`}
    >
      {role}
    </span>
  );
};

const statusBadge = (status) => {
  const styles = {
    Active: "bg-green-100 text-green-600",
    Inactive: "bg-red-100 text-red-500",
  };
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-500"}`}
    >
      {status}
    </span>
  );
};

export default function UserManagement() {
  const activeCount = users.filter((u) => u.status === "Active").length;
  const inactiveCount = users.filter((u) => u.status === "Inactive").length;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="w-full mx-auto px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 font-semibold text-gray-800 text-base">
            <UserIcon />
            User Management
          </div>
          <button className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm">
            <AddUserIcon />
            Add User
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                {[
                  "Username",
                  "Email",
                  "Role",
                  "Status",
                  "Created",
                  "Actions",
                ].map((col) => (
                  <th
                    key={col}
                    className="px-5 py-3 text-left text-xs font-semibold text-gray-400 tracking-wide"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50/60 transition-colors"
                >
                  <td className="px-5 py-4 font-semibold text-gray-800 text-sm">
                    {user.username}
                  </td>
                  <td className="px-5 py-4 text-gray-500 text-sm">
                    {user.email}
                  </td>
                  <td className="px-5 py-4">{roleBadge(user.role)}</td>
                  <td className="px-5 py-4">{statusBadge(user.status)}</td>
                  <td className="px-5 py-4 text-gray-500 text-sm">
                    {user.created}
                  </td>
                  <td className="px-5 py-4">
                    <button className="flex items-center gap-1.5 text-red-400 hover:text-red-600 text-xs font-semibold transition-colors">
                      <DeactivateIcon />
                      Deactivate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-gray-100 text-xs text-gray-400">
            Total users: {users.length} ({activeCount} active, {inactiveCount}{" "}
            inactive)
          </div>
        </div>
      </div>
    </div>
  );
}
