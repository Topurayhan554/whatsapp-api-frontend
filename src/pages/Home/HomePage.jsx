import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";
import { MdSecurity, MdAutorenew, MdStorage } from "react-icons/md";
import { useWhatsApp } from "../../hooks/useWhatsApp";
import Loader from "../../components/common/Loader";
import QRDisplay from "../../components/QRCode/QRDisplay";

const HomePage = () => {
  const { isConnected, isLoading } = useWhatsApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate("/dashboard");
    }
  }, [isConnected]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader message="Connecting to server..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md">
        {/* Top Banner */}
        <div className="bg-green-600 rounded-t-3xl px-6 py-5 text-white text-center">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow">
            <FaWhatsapp className="text-green-600 text-3xl" />
          </div>
          <h1 className="text-xl font-bold">WhatsApp API</h1>
          <p className="text-green-200 text-xs mt-1">
            Connect your WhatsApp to get started
          </p>
        </div>

        {/* QR Section */}
        <div className="p-6">
          <QRDisplay />
        </div>

        {/* Features */}
        <div className="px-6 pb-6 grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-1 bg-gray-50 rounded-xl p-3">
            <MdSecurity className="text-green-600 text-2xl" />
            <p className="text-xs text-gray-500 text-center font-medium">
              Secure Session
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 bg-gray-50 rounded-xl p-3">
            <MdAutorenew className="text-green-600 text-2xl" />
            <p className="text-xs text-gray-500 text-center font-medium">
              Auto Reconnect
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 bg-gray-50 rounded-xl p-3">
            <MdStorage className="text-green-600 text-2xl" />
            <p className="text-xs text-gray-500 text-center font-medium">
              Persistent Log
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
