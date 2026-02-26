import React, { useEffect, useState } from "react";
import analyticsService from "../../../services/analyticsService";
import Total from "../../../assets/dashbaord-icons/total.svg?react";
import LowStock from "../../../assets/dashbaord-icons/low.svg?react";
import Expire from "../../../assets/dashbaord-icons/expire.svg?react";
import Dispensed from "../../../assets/dashbaord-icons/dispensed.svg?react";
import { ActivityIcon, ClockIcon, DispensedBadge} from "../../../utils/Iconutils";
import { recentActivity } from "../../../utils/utils";


export default function Dashboard() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await analyticsService.getDashboardAnalytics();
        setApiData(data);
      } catch (error) {
        console.error("Failed to fetch dashboard analytics:", error);
      }
    };

    fetchAnalytics();
  }, []);

  const overview = apiData?.data?.overview || {
    total_medicines_tracked: 0,
    critical_low_stock_count: 0,
    expiring_soon_count: 0,
  };

  const alerts = apiData?.data?.alerts || {
    low_stock_items: [],
    expiring_batches: [],
  };

  const statsData = [
    {
      label: "Total Medications",
      value: overview.total_medicines_tracked,
      icon: <Total />,
    },
    {
      label: "Low Stock Items",
      value: overview.critical_low_stock_count,
      icon: <LowStock className="w-5 h-5 text-red-400" />,
    },
    {
      label: "Expiring Soon (90d)",
      value: overview.expiring_soon_count,
      icon: <Expire />,
    },
    { label: "Dispensed Today", value: 0, icon: <Dispensed /> }, // Placeholder as API doesn't provide this yet
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Low Stock Alerts */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                <LowStock className="w-5 h-5" />
                Low Stock Alerts
              </div>
              {alerts.low_stock_items.length > 0 && (
                <span className="ml-auto text-sm font-medium text-red-700 bg-red-100/50 px-3 py-2 rounded-sm">
                  {alerts.low_stock_items.length} Critical
                </span>
              )}
            </div>
            <div className="divide-y divide-gray-50 p-3 space-y-3">
              {alerts.low_stock_items.length > 0 ? (
                alerts.low_stock_items.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-red-100/50 rounded-sm transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {item.medication_name || item.name || "Unknown Item"}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.category} • Batch: {item.batch_number}
                        </p>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <p className="text-sm font-bold text-red-500">
                          {item.quantity || item.current_stock} units
                        </p>
                        <p className="text-xs text-gray-400">
                          Reorder: {item.reorder_level}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">
                  No low stock alerts
                </p>
              )}
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
            {alerts.expiring_batches.length > 0 ? (
              <div className="divide-y divide-gray-50 p-3 space-y-3">
                {alerts.expiring_batches.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-yellow-50 rounded-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {item.medication_name || item.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Batch: {item.batch_number}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-yellow-700">
                          Exp: {new Date(item.expiry_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
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
            )}
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
