import { useWhatsApp } from "../../hooks/useWhatsApp";

const ConnectionStatus = () => {
  const { isConnected, statusMessage } = useWhatsApp();

  return (
    <div
      className={`flex items-center gap-3 px-5 py-3 rounded-xl ${
        isConnected
          ? "bg-green-50 border border-green-200"
          : "bg-red-50 border border-red-200"
      }`}
    >
      {/* Dot */}
      <div
        className={`w-3 h-3 rounded-full ${
          isConnected ? "bg-green-500 animate-pulse" : "bg-red-400"
        }`}
      ></div>

      <div>
        <p
          className={`font-semibold ${isConnected ? "text-green-700" : "text-red-700"}`}
        >
          {isConnected ? "WhatsApp Connected" : "WhatsApp Disconnected"}
        </p>
        <p
          className={`text-xs ${isConnected ? "text-green-500" : "text-red-400"}`}
        >
          {statusMessage}
        </p>
      </div>
    </div>
  );
};

export default ConnectionStatus;
