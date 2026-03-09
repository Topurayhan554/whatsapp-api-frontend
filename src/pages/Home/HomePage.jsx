import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWhatsApp } from "../../hooks/useWhatsApp";
import QRDisplay from "../../components/QRCode/QRDisplay";
import Loader from "../../components/common/Loader";

const HomePage = () => {
  const { isConnected, isLoading } = useWhatsApp();
  const navigate = useNavigate();

  // Connected then Dashboard
  useEffect(() => {
    if (isConnected) {
      navigate("/dashboard");
    }
  }, [isConnected]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {isLoading ? (
        <Loader message="Connecting to server..." />
      ) : (
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md mx-4">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">💬</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">WhatsApp API</h1>
            <p className="text-gray-400 text-sm mt-1">
              Connect your WhatsApp to get started
            </p>
          </div>

          {/* QR Code */}
          <QRDisplay />

          {/* Instructions */}
          <div className="mt-6 bg-gray-50 rounded-xl p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              How to scan:
            </p>
            <ol className="flex flex-col gap-1">
              <li className="text-sm text-gray-500">
                1. Open WhatsApp on your phone
              </li>
              <li className="text-sm text-gray-500">
                2. Go to Settings → Linked Devices
              </li>
              <li className="text-sm text-gray-500">3. Tap Link a Device</li>
              <li className="text-sm text-gray-500">
                4. Scan the QR code above
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
