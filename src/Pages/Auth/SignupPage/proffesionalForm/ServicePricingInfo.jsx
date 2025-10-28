import AppInputField from "../../../../Components/AppInputField";
import AppSelectField from "../../../../Components/AppSelectField";

const categories = [
  { value: "active", label: "Active" },
  { value: "in-active", label: "In active" },
];

const ServicePricingInfo = ({ register, schema, errors }) => {
  return (
    <div id="pricing-services" className="space-y-6 pt-4">
      <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">
        Services & Pricing
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex-1">
            <AppInputField
              label="Service name"
              placeholder="Service name (e.g., 60-minute massage)"
              type="text"
              required
              register={register("service_name", {
                ...schema.service_name,
              })}
              error={errors.service_name?.message}
            />

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <AppInputField
                label="Price"
                placeholder="Price ($)"
                type="number"
                required
                register={register("price", {
                  ...schema.price,
                })}
                error={errors.price?.message}
              />

              <AppInputField
                label="Duration"
                placeholder="Duration (min)"
                type="number"
                required
                register={register("price", {
                  ...schema.price,
                })}
                error={errors.price?.message}
              />

              <AppSelectField
                id="service_action"
                label="Service Action"
                options={categories}
                required
                register={register("service_action", {
                  required: "Please select a service type",
                })}
                error={errors.service_action?.message}
              />
            </div>
          </div>
          <button type="button" class="ml-4 text-red-500 hover:text-red-700">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>

        <button
          type="button"
          class="flex items-center text-purple-primary hover:text-purple-dark font-semibold"
        >
          <i class="fa-solid fa-plus mr-2"></i>
          Add Another Service
        </button>
      </div>
    </div>
  );
};

export default ServicePricingInfo;
