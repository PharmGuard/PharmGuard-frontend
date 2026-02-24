const ActionCard = ({
  title,
  subtitle,
  description,
  buttonText,
  gradientFrom,
  gradientTo,
  borderColor,
  buttonColor,
  icon,
}) => (
  <div
    className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl shadow-sm border ${borderColor} p-6`}
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl rounded-full">{icon}</span>
      <h3>
        <p className={`text-lg font-semibold`}>{title}</p>
        <p className="text-sm text-primary-text">{subtitle}</p>
      </h3>
    </div>
    <p className="text-sm text-gray-600 my-6 max-w-lg">{description}</p>
    <button
      className={`w-full ${buttonColor} hover:opacity-90 text-white font-medium py-3 px-4 rounded-lg transition shadow-sm`}
    >
      {buttonText} →
    </button>
  </div>
);

export default ActionCard;
