import AppInputField from "../../../../components/AppInputField";
import AppSelectField from "../../../../components/AppSelectField";

const serviceTypeOptions = [
  { value: "", label: "Select service type" },
  { value: "in-person", label: "In-Person Only" },
  { value: "virtual", label: "Virtual Only" },
  { value: "both", label: "Both In-Person & Virtual" },
];

const BusinessInfo = ({ register, schema, errors }) => {
  return (
    <div id="business-information" className="space-y-6 pt-4">
      <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">
        Business Information
      </h3>

      <div>
        <AppInputField
          label="Business Name"
          placeholder="Enter your business name (if applicable)"
          type="text"
          required
          register={register("business_name", {
            ...schema.business_name,
          })}
          error={errors.business_name?.message}
        />
      </div>
      <div>
        <AppInputField
          label="Business Address *"
          placeholder="Street address"
          type="text"
          required
          register={register("business_address", {
            ...schema.business_address,
          })}
          error={errors.business_address?.message}
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <AppInputField
            label="City"
            placeholder="City"
            type="text"
            required
            register={register("city_address", {
              ...schema.city_address,
            })}
            error={errors.city_address?.message}
          />

          <AppInputField
            label="State"
            placeholder="State"
            type="text"
            required
            register={register("state_address", {
              ...schema.state_address,
            })}
            error={errors.state_address?.message}
          />

          <AppInputField
            label="Zip code"
            placeholder="Zip code"
            type="text"
            required
            register={register("zip_code", {
              ...schema.zip_code,
            })}
            error={errors.zip_code?.message}
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div>
          <AppSelectField
            id="serviceType"
            label="Service Type"
            options={serviceTypeOptions}
            required
            register={register("serviceType", {
              required: "Please select a service type",
            })}
            error={errors.serviceType?.message}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
