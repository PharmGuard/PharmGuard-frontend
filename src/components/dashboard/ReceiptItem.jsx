const ReceiptItem = ({ name, qty, batch, time }) => (
  <li className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
    <div>
      <p className="font-medium text-gray-900">{name}</p>
      <p className="text-sm text-gray-500">
        Qty: {qty} • Batch: {batch} • {time}
      </p>
    </div>
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-800">
      <span className="h-2 w-2 rounded-full bg-green-500" />
      Received
    </span>
  </li>
);

export default ReceiptItem;