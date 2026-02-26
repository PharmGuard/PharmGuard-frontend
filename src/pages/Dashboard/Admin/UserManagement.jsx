import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";
import InlineCreateUserForm from "./InlineCreateUserForm";
import adminService from "../../../services/adminService";
import toast from "react-hot-toast";
import { UserIcon, AddUserIcon } from "../../../utils/Iconutils";
import { toastConfig } from "../../../utils/utils";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [showCreateForm, setShowCreateForm] = useState(false);

  const fetchUsers = async (showLoading = true) => {
    if (showLoading) setIsLoading(true);
    try {
      const data = await adminService.getEmployees();

      let usersList = [];
      if (Array.isArray(data)) {
        usersList = data;
      } else if (data && Array.isArray(data.users)) {
        usersList = data.users;
      } else if (data && Array.isArray(data.data)) {
        usersList = data.data;
      }

      const mappedUsers = usersList.map((user) => ({
        id: user._id || user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        status: user.status || "Active",
        created: user.createdAt
          ? new Date(user.createdAt).toLocaleDateString()
          : "N/A",
      }));
      setUsers(mappedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Error fetching users", toastConfig);
    } finally {
      if (showLoading) setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (newUserData) => {
    try {
      const response = await adminService.addEmployee(newUserData);
      if (
        response.message &&
        response.message.toLowerCase().includes("email failed")
      ) {
        toast(response.message, {
          ...toastConfig,
          duration: 15000, // Show for 15 seconds so you can copy the OTP
          icon: "⚠️",
        });
      } else {
        toast.success("User added successfully", toastConfig);
      }

      await fetchUsers(false);
      setShowCreateForm(false);
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error(
        error.response?.data?.message || "Error adding user",
        toastConfig,
      );
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/70 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <UserIcon />
          <h1 className="text-xl font-semibold text-gray-900">
            User Management
          </h1>
        </div>

        {!showCreateForm && (
          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm transition w-full sm:w-auto"
          >
            <AddUserIcon />
            Add User
          </button>
        )}
      </div>

      {/* Inline Create Form */}
      {showCreateForm && (
        <InlineCreateUserForm
          existingUsernames={users.map((u) => u.username)}
          existingEmails={users.map((u) => u.email)}
          onSubmit={handleAddUser}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      {/* Table */}
      <UserTable users={users} setUsers={setUsers} isLoading={isLoading} />
    </div>
  );
}
