const AppInputField = ({
  label = "",
  icon = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  className = "",
  required = false,
  error,
  register,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <i
            className={`fa-solid ${icon} absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400`}
          ></i>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${
            icon ? "pl-12" : "pl-4"
          } pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-primary
           ${
             error
               ? "border-red-500 focus:ring-red-500"
               : "border-black focus:ring-2 focus:ring-purple-primary"
           }
          `}
          {...register}
          required={required}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default AppInputField;
