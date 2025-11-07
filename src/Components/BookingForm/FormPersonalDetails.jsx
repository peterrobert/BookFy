import AppInputField from "../AppInputField";

const formFields = [
  {
    id: "firstName",
    label: "First Name *",
    type: "text",
    placeholder: "Enter your first name",
    required: true,
    gridSpan: 1,
  },
  {
    id: "lastName",
    label: "Last Name *",
    type: "text",
    placeholder: "Enter your last name",
    required: true,
    gridSpan: 1,
  },
  {
    id: "email",
    label: "Email Address *",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    gridSpan: 1,
  },
  {
    id: "phone",
    label: "Phone Number *",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
    gridSpan: 1,
  },
  {
    id: "dob",
    label: "Date of Birth *",
    type: "date",
    placeholder: "",
    required: true,
    gridSpan: 2,
  },
];

const FormPersonalDetails = () => {
  const displayFormFields = () => {
    return formFields.map((field) => (
      <div
        key={field.id}
        className={field.gridSpan === 2 ? "md:col-span-2" : ""}
      >
        <AppInputField
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
        />
      </div>
    ));
  };

  return (
    <div
      id="personal-details"
      className="bg-white border border-gray-200 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-black mb-6">Personal Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayFormFields()}
      </div>
    </div>
  );
};

export default FormPersonalDetails;
