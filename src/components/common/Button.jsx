const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  fullWidth = false,
}) => {
  const base = "px-4 py-2 rounded-lg font-medium transition-all duration-200";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${base} 
        ${variants[variant]} 
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
