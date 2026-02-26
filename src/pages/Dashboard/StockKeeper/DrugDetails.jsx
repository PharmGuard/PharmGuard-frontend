import React from "react";
import { StatItem, DetailRow, ActivityItem } from "../../utils/Iconutils.jsx";


const DrugDetailsModal = ({ drug, isOpen, onClose }) => {
  if (!isOpen || !drug) return null;

  const {
    name = "Unknown Medication",
    category = "",
    batchNumber = "",
    expiryDate = "",
    currentStock = 0,
    reorderLevel = 0,
    unitPrice = 0,
    totalValue = 0,
    totalDispensed = 0,
    supplier = "",
    addedBy = "",
    dateAdded = "",
    lastModified = "",
    recentActivity = [],
  } = drug;

  const daysRemaining = expiryDate
    ? Math.max(
        0,
        Math.ceil((new Date(expiryDate) - new Date()) / (1000 * 60 * 60 * 24)),
      )
    : 0;

  const statusColor =
    currentStock > reorderLevel
      ? "text-green-600 bg-green-50"
      : "text-orange-600 bg-orange-50";

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{category}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-8">
          {/* Status Banner */}
          <div className={`px-5 py-3 rounded-lg ${statusColor}`}>
            <div className="flex items-center gap-2 font-medium">
              <span className="text-lg">•</span>
              {currentStock > reorderLevel ? "In Stock" : "Low Stock"}
            </div>
          </div>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <StatItem
              icon="📦"
              label="Current Stock"
              value={currentStock}
              unit="units available"
              color="text-green-700"
            />
            <StatItem
              icon="⏳"
              label="Expiry Date"
              value={expiryDate}
              unit={`(${daysRemaining} days remaining)`}
              color={daysRemaining < 90 ? "text-orange-600" : "text-gray-900"}
            />
            <StatItem
              icon="$"
              label="Unit Price"
              value={`$${unitPrice.toFixed(2)}`}
              unit="per unit"
            />
            <StatItem
              icon="🔄"
              label="Reorder Level"
              value={reorderLevel}
              unit="minimum stock"
              color="text-orange-600"
            />
            <StatItem
              icon="💰"
              label="Total Value"
              value={`$${totalValue.toFixed(2)}`}
              unit="current inventory"
            />
            <StatItem
              icon="🛒"
              label="Total Dispensed"
              value={totalDispensed}
              unit="units"
            />
          </div>

          {/* Details Section */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Details
            </h3>
            <div className="space-y-1">
              <DetailRow label="Batch Number:" value={batchNumber} />
              <DetailRow label="Supplier:" value={supplier} />
              <DetailRow label="Added By:" value={addedBy} />
              <DetailRow label="Date Added:" value={dateAdded} />
              <DetailRow label="Last Modified:" value={lastModified} />
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Recent Activity
            </h3>
            {recentActivity.length > 0 ? (
              <div className="space-y-1">
                {recentActivity.map((activity, index) => (
                  <ActivityItem key={index} {...activity} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No recent activity</p>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3 bg-gray-50">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
          >
            Close
          </button>
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium shadow-sm">
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrugDetailsModal;
