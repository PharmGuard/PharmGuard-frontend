import React from "react";

const CloseIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDanger = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl m-4 overflow-hidden transform transition-all space-y-4">
        <div className="p-4">
          <div className="flex justify-between items-start mb-10">
            <h3 className="text-2xl font-bold text-gray-900 text-left">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <CloseIcon className='w-5 h-5'/>
            </button>
          </div>
          <p className="text-gray-600 text-lg">{message}</p>
        </div>
        <div className="bg-[#155DFC] p-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-8 py-2.5 text-primary-text border border-white/30 rounded-lg bg-white hover:bg-gray-100 cursor-pointer font-medium transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-8 py-2.5 bg-white rounded-lg hover:bg-gray-100 font-medium transition-colors shadow-sm cursor-pointer ${
              isDanger ? "text-primary-text" : "text-[#155DFC]"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
