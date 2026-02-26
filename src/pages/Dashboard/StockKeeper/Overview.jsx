import CategoryBar from "../../../components/dashboard/CategoryBar";
import ReceiptItem from "../../../components/dashboard/ReceiptItem";
import ReorderItem from "../../../components/dashboard/ReorderItem";
import ActionCard from "../../../components/dashboard/ActionCard";
import AddStock from "../../../assets/dashbaord-icons/add.svg?react";
import Update from "../../../assets/dashbaord-icons/update.svg?react";
import ReOrder from "../../../assets/dashbaord-icons/reorder.svg?react";
import Report from "../../../assets/dashbaord-icons/report.svg?react";
import Recommendation from "../../../assets/dashbaord-icons/recommendation.svg?react";

const StockkeeperOverview = () => {
  const categories = [
    { name: "Analgesics", items: 2, units: 115, capacity: 23 },
    { name: "Antibiotics", items: 1, units: 150, capacity: 30 },
    { name: "Gastrointestinal", items: 1, units: 25, capacity: 5 },
    { name: "Antihypertensives", items: 0, units: 0, capacity: 0 },
    { name: "Antidiabetics", items: 0, units: 0, capacity: 0 },
  ];

  const reorderItems = [
    {
      name: "Paracetamol 500mg",
      category: "Analgesics",
      current: 35,
      min: 100,
      supplier: "MedSupply Inc",
    },
    {
      name: "Omeprazole 20mg",
      category: "Gastrointestinal",
      current: 25,
      min: 40,
      supplier: "MedSupply Inc",
    },
  ];

  const recentReceipts = [
    {
      name: "Paracetamol 500mg",
      qty: 500,
      batch: "PCM-2025-001",
      time: "2 hours ago",
    },
    {
      name: "Amoxicillin 500mg",
      qty: 300,
      batch: "AMK-2024-152",
      time: "5 hours ago",
    },
    {
      name: "Omeprazole 20mg",
      qty: 200,
      batch: "OME-2024-089",
      time: "1 day ago",
    },
    {
      name: "Ibuprofen 400mg",
      qty: 400,
      batch: "IBU-2025-012",
      time: "1 day ago",
    },
  ];

  return (
    <div className="space-y-6 p-6 mx-auto">
      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActionCard
          title="Add New Stock"
          subtitle="Record incoming medications"
          description="Register new medication arrivals with batch numbers, expiry dates, and quantities."
          buttonText="Add Medication"
          buttonColor="bg-green-600"
          gradientFrom="from-green-50"
          gradientTo="to-emerald-50"
          borderColor="border-green-100"
          link="/storekeeper-dashboard/add-stock"
          icon={
            <AddStock className="w-10 h-10 p-2 bg-green-600 rounded-full" />
          }
        />
        <ActionCard
          title="Update Stock Levels"
          subtitle="Edit existing medications"
          description="Modify quantities, update reorder levels, and manage medication details."
          buttonText="Manage Inventory"
          buttonColor="bg-primary"
          gradientFrom="from-blue-50"
          gradientTo="to-indigo-50"
          borderColor="border-blue-100"
          link="/storekeeper-dashboard/inventory"
          icon={<Update className="w-10 h-10 p-2 bg-primary rounded-full" />}
        />
        <ActionCard
          title="Create Reorder"
          subtitle="Place new orders"
          description="Generate purchase requests for medications at or below minimum stock level."
          buttonText="Create Reorder"
          buttonColor="bg-orange-400"
          gradientFrom="from-orange-100"
          gradientTo="to-amber-200"
          borderColor="border-orange-100"
          link="/storekeeper-dashboard"
          icon={
            <ReOrder className="w-10 h-10 p-2 bg-orange-400 rounded-full" />
          }
        />
        <ActionCard
          title="Generate Stock Report"
          subtitle="View and export reports"
          description="View and export detailed reports on stock levels, low-stock items, expiry tracking."
          buttonText=" Generate Report"
          buttonColor="bg-purple-500"
          gradientFrom="from-purple-50"
          gradientTo="to-violet-50"
          borderColor="border-purple-100"
          link="/storekeeper-dashboard/stock-reports"
          icon={<Report className="w-10 h-10 p-2 bg-purple-500 rounded-full" />}
        />
      </div>

      {/* Inventory Summary */}
      <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Inventory Summary
        </h2>
        <p className="text-sm text-gray-500 mb-4">Stock levels by category</p>
        {categories.map((cat, idx) => (
          <CategoryBar
            key={idx}
            category={
              <div>
                <div className="font-medium">{cat.name}</div>
                <div className="text-xs text-gray-400">{cat.items} Items</div>
              </div>
            }
            units={cat.units}
            capacity={cat.capacity}
            color="bg-black"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Reorder Recommendations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-orange-50 px-6 py-4 border-b border-orange-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-orange-600 text-xl">
                <Recommendation className="w-6 h-6" />
              </span>
              <h2 className="text-lg font-semibold text-orange-800">
                Reorder Recommendations
              </h2>
            </div>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-800">
              2 items
            </span>
          </div>
          <div className="p-6">
            {reorderItems.map((item, idx) => (
              <ReorderItem key={idx} {...item} />
            ))}
          </div>
        </div>

        {/* Recent Stock Receipts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
            <span className="text-green-600 text-xl">📥</span>
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Stock Receipts
            </h2>
          </div>
          <div className="p-6">
            <ul className="space-y-1">
              {recentReceipts.map((receipt, idx) => (
                <ReceiptItem key={idx} {...receipt} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Stock Management Best Practices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium">Regular Audits</p>
            <p className="text-sm text-gray-600 mt-1">
              Conduct weekly physical stock counts to verify system accuracy
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium">Temperature Control</p>
            <p className="text-sm text-gray-600 mt-1">
              Ensure medications are stored according to manufacturer
              specifications
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium">Record Keeping</p>
            <p className="text-sm text-gray-600 mt-1">
              Maintain accurate batch records and supplier documentation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockkeeperOverview;
