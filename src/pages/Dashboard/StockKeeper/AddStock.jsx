import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import FormField from "./FormField";
import drugService from "../../../services/drugService";
import toast from "react-hot-toast";
import { toastConfig } from "../../../utils/utils";

const initialFormState = {
  medicationName: "",
  category: "",
  unit: "",
  batchNumber: "",
  expiryDate: "",
  quantity: "",
  description: "",
  reorderLevel: "",
  unitPrice: "",
  supplier: "",
};

const AddStock = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => setFormData(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        name: formData.medicationName,
        category: formData.category,
        unit: formData.unit,
        stock: parseInt(formData.quantity) || 0,
        description: formData.description,
        // Sending additional fields that might be useful if the backend supports them
        reorderLevel: parseInt(formData.reorderLevel) || 0,
        unitPrice: parseFloat(formData.unitPrice) || 0,
        supplier: formData.supplier,
        batchNumber: formData.batchNumber,
        expiryDate: formData.expiryDate,
      };

      await drugService.addDrug(payload);
      toast.success("Medication added successfully", toastConfig);
      handleClear();
    } catch (error) {
      console.error("Error adding medication:", error);
      toast.error(
        error.response?.data?.message || "Failed to add medication",
        toastConfig,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "10px",
        padding: "28px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      {/* Section Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <PlusCircle size={19} color="#1a4fd6" strokeWidth={2.2} />
        <h2
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "#1a202c",
            margin: 0,
          }}
        >
          Add New Medication
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px 24px",
          }}
        >
          <FormField
            label="Medication Name"
            name="medicationName"
            placeholder="e.g., Amoxicillin 500mg"
            value={formData.medicationName}
            onChange={handleChange}
            required
          />
          <FormField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <FormField
            label="Unit"
            name="unit"
            placeholder="e.g., tablet, bottle, pack"
            value={formData.unit}
            onChange={handleChange}
            required
          />
          <FormField
            label="Batch Number"
            name="batchNumber"
            placeholder="e.g., AMX-2024-001"
            value={formData.batchNumber}
            onChange={handleChange}
            required
          />
          <FormField
            label="Expiry Date"
            name="expiryDate"
            type="date"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
          <FormField
            label="Quantity (units)"
            name="quantity"
            type="number"
            placeholder="e.g., 100"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <FormField
            label="Reorder Level"
            name="reorderLevel"
            type="number"
            placeholder="e.g., 50"
            value={formData.reorderLevel}
            onChange={handleChange}
            required
          />
          <FormField
            label="Unit Price ($)"
            name="unitPrice"
            type="number"
            placeholder="e.g., 2.50"
            value={formData.unitPrice}
            onChange={handleChange}
            required
          />
          <FormField
            label="Supplier"
            name="supplier"
            placeholder="e.g., PharmaCorp Ltd"
            value={formData.supplier}
            onChange={handleChange}
          />
          <FormField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "28px",
          }}
        >
          <button
            type="button"
            onClick={handleClear}
            disabled={loading}
            style={{
              padding: "9px 20px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              background: "#fff",
              color: "#374151",
              fontSize: "13.5px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
          >
            Clear Form
          </button>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "9px 22px",
              border: "none",
              borderRadius: "6px",
              background: loading ? "#93c5fd" : "#1a4fd6",
              color: "#fff",
              fontSize: "13.5px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1540b8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1a4fd6")}
          >
            {loading ? "Adding..." : "Add Medication"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStock;
