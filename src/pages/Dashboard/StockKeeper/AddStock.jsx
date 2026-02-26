import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import FormField from "./FormField";

const initialFormState = {
  medicationName: "",
  category: "",
  batchNumber: "",
  expiryDate: "",
  quantity: "",
  reorderLevel: "",
  unitPrice: "",
  supplier: "",
};


const AddStock = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => setFormData(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "10px",
        padding: "28px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        maxWidth: "860px",
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
            style={{
              padding: "9px 22px",
              border: "none",
              borderRadius: "6px",
              background: "#1a4fd6",
              color: "#fff",
              fontSize: "13.5px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1540b8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1a4fd6")}
          >
            Add Medication
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStock;
