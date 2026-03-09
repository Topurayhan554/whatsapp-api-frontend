const MessageLog = ({ messages, onClearLog }) => {
  if (messages.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">📋 Message Log</h2>
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <span className="text-4xl mb-2">📭</span>
          <p className="text-sm">No messages sent yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* Header + Clear Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">📋 Message Log</h2>
        <button
          onClick={onClearLog}
          className="text-xs text-red-400 hover:text-red-600 transition"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-semibold text-sm">
                  📱 {msg.phone}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{msg.message}</p>
              <p className="text-gray-400 text-xs">
                {new Date(msg.timestamp).toLocaleString()}
              </p>
            </div>
            <div>
              {msg.status === "sent" ? (
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                  ✅ Sent
                </span>
              ) : (
                <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                  ❌ Failed
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageLog;
