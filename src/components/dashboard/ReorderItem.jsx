const ReorderItem = ({ name, category, current, min, supplier }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3 hover:shadow-sm transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <button className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium px-3 py-1.5 rounded-md transition">
        REORDER
      </button>
    </div>
    <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
      <div>
        <p className="text-gray-500">Current Stock:</p>
        <p className="font-medium text-red-600">{current} units</p>
      </div>
      <div>
        <p className="text-gray-500">Min Level:</p>
        <p className="font-medium">{min} units</p>
      </div>
      <div>
        <p className="text-gray-500">Supplier:</p>
        <p className="font-medium">{supplier}</p>
      </div>
    </div>
  </div>
);

export default ReorderItem;