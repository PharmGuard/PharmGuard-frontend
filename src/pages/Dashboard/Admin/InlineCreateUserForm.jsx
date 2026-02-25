import React, { useState } from "react";

export default function InlineCreateUserForm({
  onSubmit,
  onCancel,
  existingUsernames = [],
  existingEmails = [],
}) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    role: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!form.username.trim() || !form.email.trim() || !form.role) {
      setError("Please fill all required fields");
      return;
    }
    if (
      existingUsernames.some(
        (name) => name.toLowerCase() === form.username.trim().toLowerCase(),
      )
    ) {
      setError("Username already exists");
      return;
    }
    if (
      existingEmails.some(
        (email) => email.toLowerCase() === form.email.trim().toLowerCase(),
      )
    ) {
      setError("Email already exists");
      return;
    }
    setIsSubmitting(true);
    try {
      await onSubmit({ ...form, username: form.username.trim() });
      setForm({ username: "", email: "", role: "" });
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-8 bg-blue-50/70 border border-blue-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-5">
        Create New User
      </h2>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Username *
          </label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="e.g., johndoe"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-200"
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email *
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g., john.doe@clinic.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-200"
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Role *
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-2 py-2.5 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-200"
            disabled={isSubmitting}
            required
          >
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="pharmacist">Pharmacist</option>
            <option value="storekeeper">Storekeeper</option>
          </select>
        </div>
      </form>

      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium shadow-sm flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Creating...
            </>
          ) : (
            "Create User"
          )}
        </button>
      </div>
    </div>
  );
}
