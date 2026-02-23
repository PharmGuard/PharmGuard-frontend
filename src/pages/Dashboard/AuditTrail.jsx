import { useState } from "react";

const auditData = [
  {
    id: 1,
    timestamp: "2/10/2024, 6:20:00 PM",
    user: "John Martinez",
    action: "DISPENSED",
    medication: "Paracetamol 500mg",
    batch: "PCM-2024-005",
    quantity: 20,
    notes: "Patient prescription #P-1234",
    notesLink: true,
  },
  {
    id: 2,
    timestamp: "2/11/2024, 1:15:00 PM",
    user: "John Martinez",
    action: "DISPENSED",
    medication: "Amoxicillin 500mg",
    batch: "AMX-2024-001",
    quantity: 30,
    notes: "Outpatient prescription",
    notesLink: true,
  },
  {
    id: 3,
    timestamp: "2/8/2024, 1:00:00 PM",
    user: "John Martinez",
    action: "DISPENSED",
    medication: "Omeprazole 20mg",
    batch: "OME-2024-002",
    quantity: 15,
    notes: "–",
    notesLink: false,
  },
];

// Icons
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

const FilterIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
    />
  </svg>
);

const DownloadIcon = () => (
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
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

export default function AuditTrail() {
  const [filters, setFilters] = useState({
    action: "",
    user: "",
    fromDate: "",
    toDate: "",
  });

  const handleFilter = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const filtered = auditData.filter((row) => {
    return (
      row.action.toLowerCase().includes(filters.action.toLowerCase()) &&
      row.user.toLowerCase().includes(filters.user.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-7">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 font-semibold text-gray-800 text-base">
            <ActivityIcon />
            Audit Trail
          </div>
          <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <DownloadIcon />
            Export CSV
          </button>
        </div>

        {/* Filters Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 mb-3">
            <FilterIcon />
            Filters
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Action", name: "action" },
              { label: "User", name: "user" },
              { label: "From Date", name: "fromDate" },
              { label: "To Date", name: "toDate" },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-xs text-gray-400 font-medium mb-1">
                  {f.label}
                </label>
                <input
                  type="text"
                  name={f.name}
                  value={filters[f.name]}
                  onChange={handleFilter}
                  className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {[
                  "Timestamp",
                  "User",
                  "Action",
                  "Medication",
                  "Batch",
                  "Quantity",
                  "Notes",
                ].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-400 tracking-wide"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-50 hover:bg-blue-50/30 transition-colors ${
                    i === filtered.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="px-4 py-3.5 text-gray-600">{row.timestamp}</td>
                  <td className="px-4 py-3.5 text-gray-700 font-medium">
                    {row.user}
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="inline-block bg-blue-50 text-blue-500 border border-blue-200 rounded-md px-2 py-0.5 text-xs font-semibold tracking-wide">
                      {row.action}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-gray-700">
                    {row.medication}
                  </td>
                  <td className="px-4 py-3.5 text-gray-500">{row.batch}</td>
                  <td className="px-4 py-3.5 text-gray-700 font-medium">
                    {row.quantity}
                  </td>
                  <td className="px-4 py-3.5">
                    {row.notesLink ? (
                      <a href="#" className="text-blue-500 hover:underline">
                        {row.notes}
                      </a>
                    ) : (
                      <span className="text-gray-300">{row.notes}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 py-3 border-t border-gray-100 text-xs text-gray-400">
            Showing {filtered.length} of {auditData.length} records
          </div>
        </div>
      </div>
    </div>
  );
}
