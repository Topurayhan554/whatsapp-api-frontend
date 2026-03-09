import { useWhatsApp } from "../../hooks/useWhatsApp";
import { FaWhatsapp } from "react-icons/fa";
import { MdSignalWifiOff } from "react-icons/md";

const ConnectionStatus = () => {
  const { isConnected, statusMessage } = useWhatsApp();

  return (
    <div
      className={`flex items-center gap-4 px-5 py-4 rounded-2xl border ${
        isConnected
          ? "bg-green-50 border-green-200"
          : "bg-red-50 border-red-200"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isConnected ? "bg-green-100" : "bg-red-100"
        }`}
      >
        {isConnected ? (
          <FaWhatsapp className="text-green-600 text-2xl" />
        ) : (
          <MdSignalWifiOff className="text-red-500 text-2xl" />
        )}
      </div>

      {/* Text */}
      <div>
        <p
          className={`font-bold text-sm ${
            isConnected ? "text-green-700" : "text-red-700"
          }`}
        >
          {isConnected ? "WhatsApp Connected" : "WhatsApp Disconnected"}
        </p>
        <p
          className={`text-xs mt-0.5 ${
            isConnected ? "text-green-500" : "text-red-400"
          }`}
        >
          {statusMessage}
        </p>
      </div>

      {/* Live dot */}
      <div className="ml-auto">
        <div
          className={`w-3 h-3 rounded-full ${
            isConnected ? "bg-green-500 animate-pulse" : "bg-red-400"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ConnectionStatus;
