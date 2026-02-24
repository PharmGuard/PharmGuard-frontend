const AlertItem = ({ name, batch, units, reorder, className}) => (
  <div className={`${className} flex items-center justify-between py-3`}>
    <div>
      <p className="font-medium text-primary-text">{name}</p>
      <p className="text-sm text-gray-500">{batch}</p>
    </div>
    <div className="text-right">
      <p
        className={`font-medium ${units <= 35 ? "text-red-600" : "text-gray-900"}`}
      >
        {units} units
      </p>
      <span
        className={`text-xs px-2.5 py-0.5 rounded-full text-gray-500`}
      >
        Reorder: {reorder}
      </span>
    </div>
  </div>
);

export default AlertItem;