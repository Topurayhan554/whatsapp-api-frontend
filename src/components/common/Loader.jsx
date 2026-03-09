import { FaWhatsapp } from "react-icons/fa";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaWhatsapp className="text-green-600 text-xl" />
        </div>
      </div>
      <p className="text-gray-500 text-sm font-medium">{message}</p>
    </div>
  );
};

export default Loader;
