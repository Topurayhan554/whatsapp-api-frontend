import { MdMessage, MdDeleteSweep } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { TbMailbox } from "react-icons/tb";

const MessageLog = ({ messages, onClearLog }) => {
  if (messages.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MdMessage className="text-green-600 text-xl" />
          Message Log
        </h2>
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <TbMailbox className="text-6xl mb-2 text-gray-300" />
          <p className="text-sm">No messages sent yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* Header + Clear Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <MdMessage className="text-green-600 text-xl" />
          Message Log
        </h2>
        <button
          onClick={onClearLog}
          className="flex items-center gap-1 text-xs text-red-400 hover:text-red-600 transition"
        >
          <MdDeleteSweep className="text-base" />
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
              {/* Phone */}
              <div className="flex items-center gap-2">
                <FaPhone className="text-green-500 text-xs" />
                <span className="text-green-600 font-semibold text-sm">
                  {msg.phone}
                </span>
              </div>
              {/* Message */}
              <p className="text-gray-600 text-sm">{msg.message}</p>
              {/* Time */}
              <p className="text-gray-400 text-xs">
                {new Date(msg.timestamp).toLocaleString()}
              </p>
            </div>

            {/* Status */}
            <div>
              {msg.status === "sent" ? (
                <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                  <BsCheckCircleFill className="text-green-500" />
                  Sent
                </span>
              ) : (
                <span className="flex items-center gap-1 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                  <BsXCircleFill className="text-red-500" />
                  Failed
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
