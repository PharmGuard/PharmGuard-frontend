
const StatCard = ({ title, value, icon,alert }) => (
  <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-5 hover:shadow transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-primary-text font-medium">{title}</p>
        <p className="text-xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div>{icon}</div>
    </div>
    {alert && (
      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-red-50 text-red-700">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        {alert}
      </div>
    )}
  </div>
);

export default StatCard;