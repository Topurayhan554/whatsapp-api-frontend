const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold text-sm">W</span>
          </div>
          <h1 className="text-xl font-bold">WhatsApp API</h1>
        </div>
        <span className="text-sm text-green-100">
          Powered by whatsapp-web.js
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
