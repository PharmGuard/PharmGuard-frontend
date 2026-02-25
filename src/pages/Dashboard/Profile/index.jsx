import React, { useState, useEffect } from "react";
import ProfileAvatar from "./ProfileAvatar.jsx";
import InfoRow from "./InfoRow.jsx";
import { Link } from "react-router-dom";
import authService from "../../../services/authService";
import Loader from "../../../components/Loader";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await authService.getProfile();
        setUser({
          fullName: data.username || data.fullName,
          email: data.email,
          role: data.role,
          lastLogin: data.lastLogin
            ? new Date(data.lastLogin).toLocaleString()
            : "N/A",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader text="Loading profile..." />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50/70 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden h-fit">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="px-6 py-8 flex flex-col items-center text-center bg-gradient-to-b from-blue-50/50 to-white">
            <ProfileAvatar name={user.fullName} />
          </div>

          {/* Right Side - Info Section */}
          <div className="flex-1 ">
            <div className="px-6 py-6">
              <div className="space-y-6">
                <InfoRow label="Full Name" value={user.fullName} />
                <InfoRow label="Email" value={user.email} />
                <InfoRow
                  label="Role"
                  value={
                    user.role
                      ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
                      : ""
                  }
                  editable={false}
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-4">
                <button className="bg-primary hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition shadow-sm flex items-center justify-center gap-2 text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Edit Profile
                </button>
                <Link
                  to="/auth/reset-password"
                  className="text-blue-600 hover:text-blue-700 font-medium rounded-lg transition underline flex items-center justify-center gap-2 text-sm"
                >
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
