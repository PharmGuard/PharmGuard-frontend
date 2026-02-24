import AlertItem from "../../../components/pharmacist-dashboard/AlertItem";
import StatCard from "../../../components/pharmacist-dashboard/StatsCard";
import Total from "../../../assets/dashbaord-icons/total.svg?react";
import LowStock from "../../../assets/dashbaord-icons/low.svg?react";
import Expire from "../../../assets/dashbaord-icons/expire.svg?react";
import Dispensed from "../../../assets/dashbaord-icons/dispensed.svg?react";
import Timer from '../../../assets/dashbaord-icons/timer.svg?react';
import GrayTime from '../../../assets/dashbaord-icons/gray-time.svg?react';
import DispenseMed from '../../../assets/dashbaord-icons/dispense-med.svg?react';
import CheckInventory from '../../../assets/dashbaord-icons/check-inventory.svg?react'

const PharmacistOverview = () => {
  return (
    <div className="space-y-6 p-6 max-w-full mx-auto">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-primary-text">
        <StatCard
          title="Total Medications"
          value="125"
          icon={<Total className="w-10 h-10" />}
        />
        <StatCard
          title="Low Stock Items"
          value="2 items"
          icon={<LowStock className="w-10 h-10" />}
        />
        <StatCard
          title="Expiring (90d)"
          value="0"
          icon={<Expire className="w-10 h-10" />}
        />
        <StatCard
          title="Dispensed Today"
          value="42"
          icon={<Dispensed className="w-10 h-10" />}
        />
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Low Stock Alerts */}
          <div className="flex-1 bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden">
            <div className="px-4 py-2 flex items-center gap-3">
              <LowStock className="text-red-600 w-8 h-8" />
              <h2 className="text-lg font-semibold">Low Stock Alerts</h2>
              <span className="ml-auto text-sm font-medium text-red-700 bg-red-100/50 px-3 py-2 rounded-sm">
                2 Critical
              </span>
            </div>
            <div className="p-4 space-y-4">
              <AlertItem
                name="Paracetamol 500mg - PCM-005"
                batch="Analgesics | Batch: PCM-2025-005"
                units={35}
                reorder="100"
                className="bg-red-100/50 rounded-sm px-3"
              />
              <AlertItem
                name="Omeprazole 20mg - OME-002"
                batch="Gastrointestinal | Batch: OME-2025-002"
                units={20}
                reorder="40"
                className="bg-red-100/50 rounded-sm px-3"
              />
            </div>
          </div>

          {/* Expiring Soon */}
          <div className="flex-1 bg-white rounded-xl shadow-xs overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-2">
              <Timer className="text-gray-500 w-4 h-4" />
              <h2 className="text-lg font-semibold">Expiring Soon (90 days)</h2>
            </div>
            <div className="p-4 text-center py-12 text-gray-500">
              <GrayTime className="w-10 h-10 mx-auto" />
              <span className="text-sm">No medications expiring soon.</span>
            </div>
          </div>
        </div>

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
            <button className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition shadow-sm">
              Dispense Medication →
            </button>
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
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition shadow-sm">
              View Inventory →
            </button>
          </div>
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
