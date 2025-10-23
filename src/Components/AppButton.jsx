// --- REUSABLE BUTTON COMPONENT ---
const AppButton = ({
  label,
  variant = "primary",
  onClick,
  className = "",
  icon,
  type,
}) => {
  const baseStyles =
    "font-medium transition-colors cursor-pointer inline-block rounded-lg px-6 py-2";

  const variants = {
    primary:
      "bg-purple-primary text-white hover:bg-purple-dark border border-black",
    text: "text-gray-700 hover:text-purple-primary",
    outline:
      "border border-purple-primary text-purple-primary hover:bg-purple-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      type={type ? type : null}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default AppButton;
