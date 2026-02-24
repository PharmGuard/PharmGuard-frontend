const CategoryBar = ({ category, units, capacity, color = "bg-blue-500" }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center">
      <p className="font-medium text-gray-800">{category}</p>
      <p className="text-sm text-primary-text font-semibold">{units} units</p>
    </div>
    <p className="text-xs text-gray-500 text-right">
      {capacity}% capacity
    </p>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${capacity}%` }} />
    </div>
  </div>
);

export default CategoryBar;