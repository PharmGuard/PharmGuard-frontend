export const UserIcon = () => (
  <svg
    className="w-5 h-5 text-blue-600"
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

export const AddUserIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

export const ActivityIcon = () => (
  <svg
    className="w-4 h-4 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <polyline
      points="22 12 18 12 15 21 9 3 6 12 2 12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClockIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

export const DispensedBadge = () => (
  <span className="inline-block bg-blue-50 text-blue-500 border border-blue-200 rounded-md px-1.5 py-0.5 text-xs font-semibold tracking-wide leading-none">
    DISPENSED
  </span>
);

export const StatItem = ({
  icon,
  label,
  value,
  unit = "",
  color = "text-gray-900",
}) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 text-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className={`font-semibold ${color}`}>
        {value} {unit}
      </p>
    </div>
  </div>
);

export const DetailRow = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="text-sm font-medium text-gray-900">{value}</span>
  </div>
);

export const ActivityItem = ({ action, user, time, note }) => (
  <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-b-0">
    <div className="mt-1">
      <div className="h-2 w-2 rounded-full bg-green-500" />
    </div>
    <div className="flex-1">
      <p className="text-sm">
        <span className="font-medium text-gray-900">{action}</span> by{" "}
        <span className="font-medium">{user}</span>
      </p>
      <p className="text-xs text-gray-500 mt-0.5">{time}</p>
      {note && (
        <p className="text-xs text-gray-600 mt-1 italic">Note: {note}</p>
      )}
    </div>
  </div>
);