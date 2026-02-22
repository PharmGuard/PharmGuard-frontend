import React from "react";


export default function AuditTrail() {
  const records = [
    {
      timestamp: "2/10/2024, 6:20:00 PM",
      user: "John Martinez",
      action: "DISPENSED",
      medication: "Paracetamol 500mg",
      batch: "PCM-2024-005",
      quantity: 20,
      notes: "Patient prescription #P-1234",
    },
    {
      timestamp: "2/11/2024, 1:15:00 PM",
      user: "John Martinez",
      action: "DISPENSED",
      medication: "Amoxicillin 500mg",
      batch: "AMX-2024-001",
      quantity: 30,
      notes: "Outpatient prescription",
    },
     {
      timestamp: "2/8/2024, 1:00:00 PM",
      user: "John Martinez",
      action: "DISPENSED",
      medication: "Omeprazole 20mg",
      batch: "OME-2024-002",
      quantity: 15,
      notes: "-",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Audit Trail</h1>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Action</label>
          <input
            type="text"
            className="border rounded-lg px-3 py-2 w-40"
            placeholder="Action"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">User</label>
          <input
            type="text"
            className="border rounded-lg px-3 py-2 w-40"
            placeholder="User"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">From Date</label>
          <input type="date" className="border rounded-lg px-3 py-2" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">To Date</label>
          <input type="date" className="border rounded-lg px-3 py-2" />
        </div>

        <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Export CSV
        </button>
      </div>

      {/* Table Section */}
      <div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b text-sm text-gray-500">
              <th className="py-3">Timestamp</th>
              <th>User</th>
              <th>Action</th>
              <th>Medication</th>
              <th>Batch</th>
              <th>Quantity</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3">{record.timestamp}</td>
                <td>{record.user}</td>
                <td>
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                    {record.action}
                  </span>
                </td>
                <td>{record.medication}</td>
                <td>{record.batch}</td>
                <td>{record.quantity}</td>
                <td>{record.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-xs text-gray-400 mt-4">
          Showing {records.length} of {records.length} records
        </p>
      </div>
    </div>
  );
}
