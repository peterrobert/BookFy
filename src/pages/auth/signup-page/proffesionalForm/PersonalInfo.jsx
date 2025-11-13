// --- PERSONAL INFO LIKE NAME EMAIL ----
import AppInputField from "../../../../components/AppInputField";

const PersonalInfo = ({ register, schema, errors }) => {
  return (
    <div id="personal-information" className="space-y-6">
      <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Profile Image
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <i className="fa-solid fa-upload text-gray-400 text-2xl mb-2"></i>
            <p className="text-sm text-gray-600 mb-2">
              Upload a professional photo
            </p>
            <button
              type="button"
              className="text-purple-primary hover:text-purple-dark font-semibold text-sm"
            >
              Choose File
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <AppInputField
            label="First Name *"
            placeholder="Enter your first name"
            type="text"
            required
            register={register("first_name", {
              ...schema.first_name,
            })}
            error={errors.password?.first_name}
          />
        </div>
        <div>
          <AppInputField
            label="Last Name *"
            placeholder="Enter your last name"
            type="text"
            required
            register={register("last_name", {
              ...schema.last_name,
            })}
            error={errors.password?.last_name}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <AppInputField
            label="Email Address *"
            placeholder="Enter your email address"
            type="email"
            required
            register={register("email", {
              ...schema.email,
            })}
            error={errors.password?.email}
          />
        </div>
        <div>
          <AppInputField
            label="Phone Number *"
            placeholder="Enter your phone number"
            type="tel"
            required
            register={register("phone_number", {
              ...schema.phone_number,
            })}
            error={errors.password?.phone_number}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
