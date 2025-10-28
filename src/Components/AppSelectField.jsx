import React from "react";

const AppSelectField = ({
  label,
  id,
  options,
  required = false,
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <select
        id={id}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-black focus:ring-2 focus:ring-purple-primary"
        }`}
        {...(register ? id : {})}
      >
        <option value="">Select your category</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default AppSelectField;
