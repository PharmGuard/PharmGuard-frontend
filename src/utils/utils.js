import {
  TrendingUp,
  BarChart2,
  ShoppingCart,
  CalendarClock,
  CheckCircle2,
  Truck,
} from "lucide-react";

export const toastConfig = {
  position: "top-right",
  style: {
    background: "#fff",
    color: "#000",
  },
};

export const medications = [
  {
    id: 1,
    name: "Amoxicillin 500mg",
    price: "$2.5 per unit",
    category: "Antibiotics",
    batch: "AMX-2024-001",
    expiry: "6/14/2025",
    quantity: 150,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Paracetamol 500mg",
    price: "$0.5 per unit",
    category: "Analgesics",
    batch: "PCM-2024-005",
    expiry: "12/19/2025",
    quantity: 35,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Ibuprofen 400mg",
    price: "$1.2 per unit",
    category: "Analgesics",
    batch: "IBU-2024-003",
    expiry: "4/29/2024",
    quantity: 80,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Metformin 850mg",
    price: "$0.8 per unit",
    category: "Antidiabetics",
    batch: "MET-2024-007",
    expiry: "8/9/2025",
    quantity: 120,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Omeprazole 20mg",
    price: "$1.8 per unit",
    category: "Gastrointestinal",
    batch: "OME-2024-002",
    expiry: "3/24/2025",
    quantity: 25,
    status: "Low Stock",
  },
];

export const categories = [
  "All Categories",
  "Antibiotics",
  "Analgesics",
  "Antidiabetics",
  "Gastrointestinal",
];

export const reports = [
  {
    id: "stock-movement",
    icon: TrendingUp,
    title: "Stock Movement Report",
    description: "In/out transactions",
  },
  {
    id: "inventory-valuation",
    icon: BarChart2,
    title: "Inventory Valuation",
    description: "Total stock value",
  },
  {
    id: "reorder-analysis",
    icon: ShoppingCart,
    title: "Reorder Analysis",
    description: "Purchase order history",
  },
  {
    id: "expiry-report",
    icon: CalendarClock,
    title: "Expiry Report",
    description: "Near-expiry medications",
  },
  {
    id: "stock-accuracy",
    icon: CheckCircle2,
    title: "Stock Accuracy",
    description: "Physical vs system count",
  },
  {
    id: "supplier-performance",
    icon: Truck,
    title: "Supplier Performance",
    description: "Delivery & quality metrics",
  },
];

export const recentActivity = [
  {
    user: "John Martinez",
    medication: "Paracetamol 500mg",
    quantity: 20,
    date: "2/10/2025, 9:20:00 AM",
  },
  {
    user: "John Martinez",
    medication: "Amoxicillin 500mg",
    quantity: 30,
    date: "2/11/2025, 1:15:00 PM",
  },
  {
    user: "John Martinez",
    medication: "Omeprazole 20mg",
    quantity: 15,
    date: "2/1/2026, 4:00:00 AM",
  },
];