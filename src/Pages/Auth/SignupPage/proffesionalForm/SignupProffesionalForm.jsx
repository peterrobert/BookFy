import { useForm } from "react-hook-form";
import * as yup from "yup";
import PersonalInfo from "./PersonalInfo";
import Professionalinfo from "./Professionalinfo";
import BusinessInfo from "./BusinessInfo";
import ServicePricingInfo from "./ServicePricingInfo";
import AccountSecurityInfo from "./AccountSecurityInfo";
import AvailabilityInfo from "./AvailabilityInfo";
import AppButton from "../../../../Components/AppButton";

const SignupProffesionalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const schema = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phone_number: yup.number().required("Phone number is required"),
  });

  return (
    <section
      id="professional-registration-form"
      className="py-16 px-5 bg-gray-50"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl border border-black shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">
                Create Your Professional Account
              </h2>
              <p className="text-gray-600">
                Join our platform and start growing your business
              </p>
            </div>
            <form clasName="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              <PersonalInfo
                register={register}
                errors={errors}
                schema={schema}
              />
              <Professionalinfo
                register={register}
                errors={errors}
                schema={schema}
              />
              <BusinessInfo
                register={register}
                errors={errors}
                schema={schema}
              />

              <ServicePricingInfo
                register={register}
                errors={errors}
                schema={schema}
              />
              <AvailabilityInfo
                register={register}
                errors={errors}
                schema={schema}
              />

              <AccountSecurityInfo
                register={register}
                errors={errors}
                schema={schema}
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <AppButton
                  label="Save as Draft"
                  variant="outline"
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg border border-black font-semibold hover:bg-gray-300 transition-colors"
                />

                <AppButton
                  type="submit"
                  label="Create Professional Account"
                  variant="outline"
                  className="flex-1 bg-purple-primary text-white py-4 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupProffesionalForm;
