import React, { useState, useEffect } from "react";

const EditMedicationModal = ({ medication, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: medication?.name || "",
    category: medication?.category || "",
    batchNumber: medication?.batchNumber || "",
    expiryDate: medication?.expiryDate || "",
    quantity: medication?.currentStock || "",
    reorderLevel: medication?.reorderLevel || "",
    unitPrice: medication?.unitPrice || "",
    supplier: medication?.supplier || "",
  });

  useEffect(() => {
    if (medication) {
      setFormData({
        name: medication.name || "",
        category: medication.category || "",
        batchNumber: medication.batchNumber || "",
        expiryDate: medication.expiryDate || "",
        quantity: medication.currentStock || "",
        reorderLevel: medication.reorderLevel || "",
        unitPrice: medication.unitPrice || "",
        supplier: medication.supplier || "",
      });
    }
  }, [medication]);

  if (!isOpen || !medication) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.category.trim() ||
      !formData.batchNumber.trim() ||
      !formData.expiryDate.trim() ||
      !formData.quantity ||
      !formData.reorderLevel ||
      !formData.unitPrice
    ) {
      alert("Please fill all required fields");
      return;
    }

    // Pass updated data back to parent
    onSave({
      ...medication,
      ...formData,
      currentStock: Number(formData.quantity),
      reorderLevel: Number(formData.reorderLevel),
      unitPrice: Number(formData.unitPrice),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Edit Medication
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Medication Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Medication Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Category <span className="text-red-500">*</span>
              </label>
              <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Batch Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Batch Number
              </label>
              <input
                name="batchNumber"
                value={formData.batchNumber}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <input
                name="expiryDate"
                type="text" // or type="date" if you prefer native picker
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/DD/YYYY"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Quantity (Current Stock) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Quantity (units) <span className="text-red-500">*</span>
              </label>
              <input
                name="quantity"
                type="number"
                min="0"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Reorder Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Reorder Level <span className="text-red-500">*</span>
              </label>
              <input
                name="reorderLevel"
                type="number"
                min="0"
                value={formData.reorderLevel}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Unit Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Unit Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                name="unitPrice"
                type="number"
                step="0.01"
                min="0"
                value={formData.unitPrice}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Supplier
              </label>
              <input
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-5 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium shadow-sm transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMedicationModal;
