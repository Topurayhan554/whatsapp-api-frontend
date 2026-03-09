import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  variant = "primary",
  fullWidth = false,
  icon = null,
}) => {
  const base =
    "flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${base}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${disabled || loading ? "cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin text-lg" />
      ) : (
        icon && <span className="text-lg">{icon}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
