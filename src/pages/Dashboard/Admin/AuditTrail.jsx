import { useState, useEffect } from "react";
import adminService from "../../../services/adminService";
import Loader from "../../../components/Loader";

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
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    action: "",
    user: "",
    fromDate: "",
    toDate: "",
  });

  const fetchLogs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await adminService.getAuditLogs();
      let logsList = [];
      if (Array.isArray(data)) {
        logsList = data;
      } else if (data && Array.isArray(data.logs)) {
        logsList = data.logs;
      } else if (data && Array.isArray(data.data)) {
        logsList = data.data;
      }

      const mappedLogs = logsList.map((log) => ({
        id: log._id || log.id,
        rawDate: log.timestamp || log.createdAt,
        timestamp: new Date(log.timestamp || log.createdAt).toLocaleString(),
        user:
          typeof log.user === "object"
            ? log.user.username
            : log.user || "Unknown",
        action: log.action || "UNKNOWN",
        medication: log.medication || log.details?.medication || "-",
        batch: log.batch || log.details?.batch || "-",
        quantity: log.quantity || log.details?.quantity || "-",
        notes: log.notes || log.details?.notes || "-",
        notesLink: false,
      }));
      setLogs(mappedLogs);
    } catch (error) {
      console.error("Failed to fetch audit logs:", error);
      if (
        error.response &&
        (error.response.status === 404 || error.response.status === 500)
      ) {
        setLogs([]);
        return;
      }
      setError("Failed to load audit logs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleFilter = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const filtered = logs.filter((row) => {
    const matchesAction = row.action
      .toLowerCase()
      .includes(filters.action.toLowerCase());
    const matchesUser = row.user
      .toLowerCase()
      .includes(filters.user.toLowerCase());
    const rowDate = new Date(row.rawDate);
    const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
    const toDate = filters.toDate ? new Date(filters.toDate) : null;
    if (toDate) toDate.setHours(23, 59, 59, 999);

    return (
      matchesAction &&
      matchesUser &&
      (!fromDate || rowDate >= fromDate) &&
      (!toDate || rowDate <= toDate)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Main Content */}
      <div className="w-full mx-auto px-8 py-7">
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
                  type={f.name.includes("Date") ? "date" : "text"}
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
              {isLoading ? (
                <tr>
                  <td colSpan="7" className="px-4 py-12">
                    <Loader text="Loading audit logs..." />
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="7" className="px-4 py-12 text-center">
                    <p className="text-red-500 font-medium mb-2">{error}</p>
                    <button
                      onClick={fetchLogs}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
                    >
                      Try Again
                    </button>
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-4 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <svg
                        className="w-12 h-12 mb-3 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="text-base font-medium text-gray-500">
                        No records found
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filtered.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`border-b border-gray-50 hover:bg-blue-50/30 transition-colors ${
                      i === filtered.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-4 py-3.5 text-gray-600">
                      {row.timestamp}
                    </td>
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
                ))
              )}
            </tbody>
          </table>
          <div className="px-4 py-3 border-t border-gray-100 text-xs text-gray-400">
            Showing {filtered.length} of {logs.length} records
          </div>
        </div>
      </div>
    </div>
  );
}
