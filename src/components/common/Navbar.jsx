import { FaWhatsapp } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import { useWhatsApp } from "../../hooks/useWhatsApp";

const Navbar = () => {
  const { isConnected } = useWhatsApp();

  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <FaWhatsapp className="text-green-600 text-2xl" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">WhatsApp API</h1>
            <p className="text-green-200 text-xs leading-tight">
              Powered by whatsapp-web.js
            </p>
          </div>
        </div>

        {/* Right - Connection Status */}
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
            isConnected
              ? "bg-green-500 text-white"
              : "bg-green-700 text-green-200"
          }`}
        >
          <HiStatusOnline
            className={`text-base ${
              isConnected ? "text-white" : "text-green-400"
            }`}
          />
          {isConnected ? "Connected" : "Disconnected"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
