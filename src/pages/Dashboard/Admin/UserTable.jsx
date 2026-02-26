import React, { useState } from "react";
import RoleBadge from "./RoleBadge";
import StatusBadge from "./StatusBadge";
import DeactivateIcon from "../../../assets/dashbaord-icons/deactivate.svg?react";
import Loader from "../../../components/Loader";
import ConfirmationModal from "../../../components/ConfirmationModal";

const ActivateIcon = () => (
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
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function UserTable({ users, setUsers, isLoading }) {
  const activeCount = users.filter((u) => u.status === "Active").length;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleActionClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleConfirmAction = () => {
    if (selectedUser) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === selectedUser.id
            ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
            : u,
        ),
      );
    }
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan="6" className="px-6 py-12">
                  <Loader text="Loading users..." />
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <RoleBadge role={user.role} />
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-6 py-4 text-gray-500">{user.created}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleActionClick(user)}
                        className={`flex items-center gap-1.5 text-sm ${
                          user.status === "Active"
                            ? "text-red-600 hover:text-amber-800"
                            : "text-green-600 hover:text-green-800"
                        }`}
                      >
                        {user.status === "Active" ? (
                          <DeactivateIcon />
                        ) : (
                          <ActivateIcon />
                        )}
                        {user.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-3 border-t border-gray-100 text-sm text-gray-500">
        Total users: {users.length} ({activeCount} active,{" "}
        {users.length - activeCount} inactive)
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmAction}
        title={
          selectedUser?.status === "Active"
            ? "Deactivate User"
            : "Activate User"
        }
        message={`Are you sure you want to ${
          selectedUser?.status === "Active" ? "deactivate" : "activate"
        } ${selectedUser?.username}?`}
        confirmText="ok"
        isDanger={selectedUser?.status === "Active"}
      />
    </div>
  );
}
