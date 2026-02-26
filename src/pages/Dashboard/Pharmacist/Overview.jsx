import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import analyticsService from "../../../services/analyticsService";
import transactionService from "../../../services/transactionService";
import DispenseMed from "../../../assets/dashbaord-icons/dispense-med.svg?react";
import CheckInventory from "../../../assets/dashbaord-icons/check-inventory.svg?react";
import { TrendingUp, History, AlertCircle } from "lucide-react";

const PharmacistOverview = () => {
  const [forecastData, setForecastData] = useState(null);
  const [loadingForecast, setLoadingForecast] = useState(true);

  const [historyData, setHistoryData] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(true);

  useEffect(() => {
    const fetchForecast = async () => {
      setLoadingForecast(true);
      try {
        const response = await analyticsService.getDrugForecast(1);
        if (response && response.success) {
          setForecastData(response.data);
        }
      } catch (err) {
        console.error("Failed to fetch drug forecast:", err);
      } finally {
        setLoadingForecast(false);
      }
    };

    const fetchHistory = async () => {
      setLoadingHistory(true);
      try {
        const response = await transactionService.getDispensingHistory();
        // Attempt to extract array from common response patterns
        const data = Array.isArray(response)
          ? response
          : response.data || response.transactions || [];

        setHistoryData(data);
      } catch (err) {
        console.error("Failed to fetch history:", err);
      } finally {
        setLoadingHistory(false);
      }
    };

    fetchForecast();
    fetchHistory();
  }, []);

  return (
    <div className="space-y-6 p-6 max-w-full mx-auto">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row gap-6 w-full mx-auto">
          {/* Dispense Medication */}
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary p-3 rounded-full">
                <DispenseMed className="w-7 h-7" />
              </span>
              <h2 className="text-lg font-semibold text-blue-900">
                Dispense Medication
              </h2>
            </div>
            <p className="text-sm max-w-lg text-gray-600 mb-12">
              Quickly search and dispense medications with automatic stock
              updates and FEFO compliance.
            </p>
            <Link
              to="/pharmacist-dashboard/dispense"
              className="block text-center w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition shadow-sm"
            >
              Dispense Medication →
            </Link>
          </div>

          {/* Check Inventory */}
          <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 rounded-full p-2">
                <CheckInventory className="w-7 h-7" />
              </span>
              <h2 className="text-lg font-semibold text-green-900">
                Check Inventory
              </h2>
            </div>
            <p className="text-sm max-w-lg text-gray-600 mb-12">
              Real-time access to complete medication inventory with batch
              details and expiry dates.
            </p>
            <Link
              to="/pharmacist-dashboard/inventory"
              className="block text-center w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition shadow-sm"
            >
              View Inventory →
            </Link>
          </div>
        </div>
      </div>

      {/* AI Forecast Section */}
      {loadingForecast ? (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-24 bg-gray-100 rounded"></div>
            <div className="h-24 bg-gray-100 rounded"></div>
          </div>
        </div>
      ) : forecastData ? (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              AI Stock Forecast
            </h2>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                forecastData.alert_level === "OK"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {forecastData.alert_description}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">
                {forecastData.medicine_name}
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {Number(forecastData.days_until_stockout).toFixed(1)} Days
              </p>
              <p className="text-xs text-gray-400 mt-1">Until stockout</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-600 mb-1 font-medium">
                Recommendation
              </p>
              <p className="text-sm text-blue-800">
                {forecastData.recommendation}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* Dispensing History Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <History className="w-5 h-5 text-blue-600" />
            Recent Dispensing History
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 font-semibold">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Drug</th>
                <th className="px-6 py-3 text-center">Quantity</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Pharmacist</th>
                <th className="px-6 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loadingHistory ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center">
                    <div className="flex justify-center items-center gap-2 text-gray-400">
                      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      Loading history...
                    </div>
                  </td>
                </tr>
              ) : historyData.length > 0 ? (
                historyData.map((item, index) => (
                  <tr
                    key={item.id || index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      {item.drugName ||
                        item.drug?.name ||
                        `Drug ID: ${item.drugId}`}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                        {item.quantity} units
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {item.pharmacist?.username || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-gray-400 italic max-w-xs truncate">
                      {item.notes || "-"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-8 text-center text-gray-400 flex flex-col items-center justify-center gap-2"
                  >
                    <AlertCircle className="w-6 h-6 text-gray-300" />
                    No dispensing records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Daily Reminder */}
      <div className="bg-gray-50 rounded-lg border border-gray-100 shadow-xs p-6 my-3">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          📋 Daily Reminder
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary-bg border border-blue-100/50 rounded-sm p-4">
            <p className="text-gray-800">FEFO Protocol</p>
            <p className="text-sm text-gray-600 mt-1">
              Always dispense medications with nearest expiry date first
            </p>
          </div>
          <div className="bg-green-fade border border-green-100/50 rounded-sm p-4">
            <p className="text-gray-800">Stock Verification</p>
            <p className="text-sm text-gray-600 mt-1">
              Verify batch numbers & expiry date before dispensing
            </p>
          </div>
          <div className="bg-red-fade border border-red-100/50 rounded-sm p-4">
            <p className="text-gray-800">Documentation</p>
            <p className="text-sm text-gray-600 mt-1">
              All transactions are automatically logged for compliance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistOverview;
