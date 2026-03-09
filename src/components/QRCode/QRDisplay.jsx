import { useWhatsApp } from "../../hooks/useWhatsApp";
import Loader from "../common/Loader";
import { FaWhatsapp } from "react-icons/fa";
import { MdQrCode2 } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";

const QRDisplay = () => {
  const { qrCode, isLoading, statusMessage } = useWhatsApp();

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <MdQrCode2 className="text-green-600" />
          Scan QR Code
        </h2>
        <p className="text-gray-400 mt-1 text-sm">
          Use your WhatsApp mobile app to scan
        </p>
      </div>

      {/* QR Box */}
      <div className="bg-white p-4 rounded-2xl shadow-lg border-2 border-green-100 relative">
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-green-500 rounded-tl"></div>
        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-green-500 rounded-tr"></div>
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-green-500 rounded-bl"></div>
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-green-500 rounded-br"></div>

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
      <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <span className="text-yellow-700 text-sm font-medium">
          {statusMessage}
        </span>
      </div>

      {/* Instructions */}
      <div className="w-full bg-gray-50 rounded-xl p-4">
        <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <BsPhoneFill className="text-green-600" />
          How to scan:
        </p>
        <ol className="flex flex-col gap-2">
          {[
            "Open WhatsApp on your phone",
            "Go to Settings → Linked Devices",
            "Tap Link a Device",
            "Scan the QR code above",
          ].map((step, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default QRDisplay;
