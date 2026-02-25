export default function StatusBadge({ status }) {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  const variants = {
    Active: `${base} bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20`,
    Inactive: `${base} bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20`,
  };

  return (
    <span
      className={
        variants[status] ||
        `${base} bg-gray-50 text-gray-700 ring-1 ring-inset ring-gray-600/20`
      }
    >
      {status}
    </span>
  );
}
