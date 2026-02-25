const InfoRow = ({ label, value, editable = true }) => (
  <div className="py-3 border-b border-gray-200 last:border-b-0 text-lg">
    <div className="flex items-center justify-between">
      <div>
        <span className="text-lg font-medium text-gray-500">{label} : </span>
        <span className="mt-0.5 text-gray-900 font-medium">{value}</span>
      </div>
      {editable && (
        <button className="text-gray-400 hover:text-blue-600 transition">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      )}
    </div>
  </div>
);

export default InfoRow;