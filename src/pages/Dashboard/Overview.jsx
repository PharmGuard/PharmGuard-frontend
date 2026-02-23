import React from "react";
const PackageIcon = () => (
  <svg
    className="w-5 h-5 text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V11"
    />
  </svg>
);

const AlertTriangleIcon = ({ className = "w-5 h-5 text-red-400" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ActivityIcon = () => (
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

const ClockIcon = () => (
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

const DispensedBadge = () => (
  <span className="inline-block bg-blue-50 text-blue-500 border border-blue-200 rounded-md px-1.5 py-0.5 text-xs font-semibold tracking-wide leading-none">
    DISPENSED
  </span>
);

const statsData = [
  { label: "Total Medications", value: 125, icon: <PackageIcon /> },
  {
    label: "Low Stock Items",
    value: 2,
    icon: <AlertTriangleIcon className="w-5 h-5 text-red-400" />,
  },
  { label: "Expiring Soon (90d)", value: 0, icon: <CalendarIcon /> },
  { label: "Dispensed Today", value: 42, icon: null },
];

const lowStockItems = [
  {
    name: "Paracetamol 500mg",
    sub: "Analgesics • Batch: PCM-2025-005",
    units: 35,
    reorder: 100,
  },
  {
    name: "Omeprazole 20mg",
    sub: "Gastrointestinal • Batch: OME-2025-002",
    units: 20,
    reorder: 40,
  },
];

const recentActivity = [
  {
    user: "John Martinez",
    medication: "Paracetamol 500mg",
    quantity: 20,
    date: "2/10/2025, 9:20:00 AM",
  },
  {
    user: "John Martinez",
    medication: "Amoxicillin 500mg",
    quantity: 30,
    date: "2/11/2025, 1:15:00 PM",
  },
  {
    user: "John Martinez",
    medication: "Omeprazole 20mg",
    quantity: 15,
    date: "2/1/2026, 4:00:00 AM",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="w-full max-w-6xl mx-auto px-8 py-6">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-5 mb-5">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between shadow-sm min-w-0"
            >
              <div>
                <p className="text-xs text-gray-400 font-medium mb-2">
                  {stat.label}
                </p>
                <span className="text-3xl font-bold text-gray-800">
                  {stat.value}
                </span>
              </div>
              {stat.icon && (
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Middle Row: Low Stock + Expiring Soon */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Low Stock Alerts */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                <AlertTriangleIcon className="w-4 h-4 text-yellow-500" />
                Low Stock Alerts
              </div>
              <span className="text-xs font-semibold bg-red-500 text-white px-2.5 py-1 rounded-full">
                2 Critical
              </span>
            </div>
            <div className="divide-y divide-gray-50">
              {lowStockItems.map((item) => (
                <div
                  key={item.name}
                  className="px-4 py-3 bg-red-50/40 hover:bg-red-50/70 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <p className="text-sm font-bold text-red-500">
                        {item.units} units
                      </p>
                      <p className="text-xs text-gray-400">
                        Reorder: {item.reorder}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expiring Soon */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100">
              <ClockIcon />
              <span className="text-sm font-semibold text-gray-700">
                Expiring Soon (90 days)
              </span>
            </div>
            <div className="flex flex-col items-center justify-center h-40 text-gray-300 gap-2">
              <svg
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
              <p className="text-xs text-gray-400">
                No medications expiring soon
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100">
            <ActivityIcon />
            <span className="text-sm font-semibold text-gray-700">
              Recent Activity
            </span>
          </div>
          <div className="divide-y divide-gray-50 px-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="py-3 flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <DispensedBadge />
                    <span className="text-xs font-semibold text-gray-700">
                      {item.user}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {item.medication} • {item.quantity} units
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
