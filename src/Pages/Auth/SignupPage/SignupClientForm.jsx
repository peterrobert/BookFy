import { useForm } from "react-hook-form";
import * as yup from "yup";
import AppButton from "../../../Components/AppButton";
import AppInputField from "../../../Components/AppInputField";

const SignupClientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  return (
    <section id="client-registration-form" className="py-6 px-5 bg-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl border border-black shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">
                Create Your Client Account
              </h2>
              <p className="text-gray-600 font-light">
                Fill in your details to get started
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AppInputField
                  label="First Name *"
                  placeholder="Enter your first name"
                  required
                  register={register("first_name", { ...schema.firstName })}
                />
                <AppInputField
                  label="Last Name *"
                  placeholder="Enter your last name"
                  required
                  register={register("last_name", { ...schema.lastName })}
                />
              </div>
              <AppInputField
                type="email"
                label="Email Address *"
                placeholder="Enter your email address"
                required
                register={register("email", { ...schema.email })}
                error={errors.password?.email}
              />
              <AppInputField
                type="tel"
                label="Phone Number *"
                placeholder="Enter your phone number"
              />
              <AppInputField type="date" label="Date of Birth" />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender
                </label>
                <select className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <AppInputField
                type="password"
                label="Password *"
                placeholder="Create a secure password"
              />
              <AppInputField
                type="password"
                label="Confirm Password *"
                placeholder="Confirm your password"
              />
              <AppInputField
                type="checkbox"
                label="I agree to the Terms of Service and Privacy Policy"
              />
              <AppInputField
                type="checkbox"
                label="I would like to receive promotional emails and updates about new features"
              />
              <AppButton
                type="submit"
                label="Create Client Account"
                className="w-full bg-purple-primary text-white py-4 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupClientForm;
