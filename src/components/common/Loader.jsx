const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm">{message}</p>
    </div>
  );
};

export default Loader;
