import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import drugService from "../../../services/drugService";
import toast from "react-hot-toast";
import { toastConfig } from "../../../utils/utils";

const MedicationInventory = () => {
  const [medications, setMedications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    const fetchMedications = async () => {
      setIsLoading(true);
      try {
        const response = await drugService.getAllDrugs();
        const drugsList = response.data || response; // Handle nested data property

        if (!Array.isArray(drugsList)) {
          throw new Error("API did not return an array of drugs");
        }

        const mappedMeds = drugsList.map((med) => ({
          id: med.id,
          name: med.name,
          category: med.category,
          batch: med.batchNumber || "N/A",
          expiry: new Date(med.expiryDate).toLocaleDateString(),
          quantity: med.quantityInStock,
          status: med.quantityInStock > 50 ? "In Stock" : "Low Stock",
          pricePerUnit: `₦${med.unitPrice}`,
        }));
        setMedications(mappedMeds);
      } catch (err) {
        console.error("Failed to fetch medications:", err);
        setError(
          "Failed to load medication inventory. Please try again later.",
        );
        toast.error(
          err.response?.data?.message || "Failed to load inventory",
          toastConfig,
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedications();
  }, []);

  const filteredMedications = medications.filter((med) => {
    const matchesSearch =
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.batch.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      med.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8">
      <div className="w-full space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Medication Inventory
          </h1>
        </div>

        {/* Search + Filter Bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center w-full">
          {/* Search Input */}
          <div className="relative w-full md:flex-[2]">
            <input
              type="text"
              placeholder="Search by name, category, or batch number..."
              className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full md:flex-[1]">
            <select
              className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Analgesics</option>
              <option>Antibiotics</option>
              <option>Antidiabetics</option>
              <option>Gastrointestinal</option>
              {/* Add more as needed */}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Medication
                </th>
                <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Category
                </th>
                <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Unit
                </th>
                <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Reorder Level
                </th>
                <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Quantity
                </th>
                <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-6 py-3.5 text-right text-sm font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {isLoading ? (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">
                    Loading inventory...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-red-500">
                    {error}
                  </td>
                </tr>
              ) : filteredMedications.length > 0 ? (
                filteredMedications.map((med) => (
                  <tr key={med.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {med.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {med.category}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {med.unit}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {med.reorderLevel}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {med.stock}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          med.status === "In Stock"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {med.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="text-blue-500 hover:text-blue-600">
                        <Eye className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">
                    No medications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <div className="text-sm text-gray-500">
          Showing {filteredMedications.length} of {medications.length}{" "}
          medications
        </div>
      </div>
    </div>
  );
};

export default MedicationInventory;
