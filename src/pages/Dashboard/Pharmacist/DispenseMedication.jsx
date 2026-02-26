import React, { useState } from "react";
import { Search, Info } from "lucide-react";
import Dispense from "../../../assets/dashbaord-icons/dispense.svg?react";
import transactionService from "../../../services/transactionService";
import toast from "react-hot-toast";
import { toastConfig } from "../../../utils/utils";

const DispenseMedication = () => {
  const [formData, setFormData] = useState({
    drugId: "",
    quantity: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleClear = () => {
    setFormData({ drugId: "", quantity: "", notes: "" });
  };

  const handleSubmit = async () => {
    if (!formData.drugId || !formData.quantity) {
      toast.error("Please fill in all required fields", toastConfig);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        drugId: parseInt(formData.drugId),
        quantity: parseInt(formData.quantity),
        notes: formData.notes,
      };
      const response = await transactionService.dispenseDrug(payload);
      toast.success(
        response?.message || "Medication dispensed successfully",
        toastConfig,
      );
      handleClear();
    } catch (error) {
      console.error("Dispense error:", error);
      toast.error(
        error.response?.data?.message || "Failed to dispense medication",
        toastConfig,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8">
      <div className="">
        {/* Main Form Card */}
        <div className="rounded-xl space-y-10 border border-gray-200 bg-white shadow-sm py-4 px-2">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-5">
            <div>
              <Dispense />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              Dispense Medication
            </h1>
          </div>

          {/* Form Content */}
          <div className="space-y-6 p-6">
            {/* Search Medication */}
            <div className="space-y-2">
              <label
                htmlFor="drugId"
                className="block text-sm font-medium text-gray-700"
              >
                Drug ID*
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  id="drugId"
                  type="number"
                  value={formData.drugId}
                  onChange={handleChange}
                  placeholder="Enter Drug ID (e.g., 1)"
                  className="block w-full rounded-lg border border-gray-200 px-10 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none bg-gray-100"
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity to Dispense*
              </label>
              <input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                placeholder="Enter quantity"
                className="block w-full max-w-xs rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none bg-gray-100"
              />
            </div>

            {/* Patient Reference / Notes */}
            <div className="space-y-2">
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700"
              >
                Patient Reference / Notes
              </label>
              <textarea
                id="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="e.g., Prescription #P-1234 or Patient name"
                className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-y bg-gray-100"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end sm:gap-4">
              <button
                type="button"
                onClick={handleClear}
                disabled={loading}
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className={`rounded-lg px-6 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                {loading ? "Dispensing..." : "Dispense Medication"}
              </button>
            </div>
          </div>

          {/* FEFO Reminder */}
          <div className="rounded-xl border border-gray-100 bg-gray-100 p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  FEFO Reminder
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Always follow First Expired, First Out (FEFO) protocol.
                  Dispense medications with the nearest expiry date first to
                  minimize waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispenseMedication;
