export default function RoleBadge({ role }) {
  const map = {
    admin: "bg-blue-100 text-blue-700",
    pharmacist: "bg-orange-100 text-orange-700",
    storekeeper: "bg-teal-100 text-teal-700",
  };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${map[role] || "bg-gray-100 text-gray-600"}`}
    >
      {role}
    </span>
  );
}
