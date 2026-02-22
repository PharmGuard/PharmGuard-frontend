import React from "react";
export default function Overview() {
  const stats = [
    { title: "Total Medications", value: 125 },
    { title: "Low Stock Items", value: 2 },
    { title: "Expiring Soon (90d)", value: 0 },
    { title: "Dispensed Today", value: 42 },
  ];

  const lowStockItems = [
    { name: "Paracetamol 500mg", units: 35 },
    { name: "Omeprazole 20mg", units: 20 },
  ];

  const activities = [
    {
      user: "John Martinez",
      drug: "Paracetamol 500mg",
      units: 20,
      date: "2/10/2025, 9:20:AM"
    },
    { 
      user: "John Martinez",
      drug: "Amoxicillin 500mg",
      units: 30,
      date: "2/11/2025, 1:15:00PM"
    },
      {
      user: "John Martinez",
      drug: "Omeprazole 20mg",
      units: 15,
      date: "2/1/2026, 4:00:00AM"
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* 🔵 TOP STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-sm border"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* 🟡 MIDDLE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 🔴 LOW STOCK */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-lg">Low Stock Alerts</h3>
            <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
              {lowStockItems.length} Critical
            </span>
          </div>

          {lowStockItems.map((item, index) => (
            <div
              key={index}
              className="bg-red-50 border border-red-200 p-4 rounded-xl mb-3"
            >
              <p className="font-medium">{item.name}</p>
              <p className="text-red-600 font-semibold">{item.units} units</p>
            </div>
          ))}
        </div>

        {/* 🟠 EXPIRING SOON */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="font-semibold text-lg mb-4">
            Expiring Soon (90 days)
          </h3>

          <div className="text-center py-16 text-gray-400">
            No medications expiring soon
          </div>
        </div>
      </div>

      {/* 🔵 RECENT ACTIVITY */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>

        {activities.map((activity, index) => (
          <div key={index} className="border-b py-4 last:border-none">
            <p>
              <span className="text-blue-600 font-medium">DISPENSED</span>{" "}
              {activity.user}
            </p>

            <p className="text-sm text-gray-500">
              {activity.drug} • {activity.units} units
            </p>

            <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
