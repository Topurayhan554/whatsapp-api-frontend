import Loader from "../../components/common/Loader";
import { useWhatsApp } from "../../hooks/useWhatsApp";

const QRDisplay = () => {
  const { qrCode, isLoading, statusMessage } = useWhatsApp();

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Scan QR Code</h2>
        <p className="text-gray-500 mt-1">
          Open WhatsApp → Linked Devices → Link a Device
        </p>
      </div>

      {/* QR Box */}
      <div className="bg-white p-4 rounded-2xl shadow-lg border-2 border-green-100">
        {isLoading ? (
          <div className="w-64 h-64 flex items-center justify-center">
            <Loader message="Generating QR Code..." />
          </div>
        ) : qrCode ? (
          <img
            src={qrCode}
            alt="WhatsApp QR Code"
            className="w-64 h-64 object-contain"
          />
        ) : (
          <div className="w-64 h-64 flex items-center justify-center">
            <Loader message="Waiting for QR..." />
          </div>
        )}
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <span className="text-yellow-700 text-sm font-medium">
          {statusMessage}
        </span>
      </div>
    </div>
  );
};

export default QRDisplay;
