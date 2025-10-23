import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import AppInputField from "../../../Components/AppInputField";
import AppButton from "../../../Components/AppButton";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  return (
    <div
      id="login-form-container"
      className="bg-white rounded-2xl border border-black shadow-2xl p-8 lg:p-12 relative"
    >
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center">
        <i className="fa-solid fa-lock text-white text-sm"></i>
      </div>

      <div id="login-header" className="text-center mb-8">
        <h3 className="text-2xl font-bold text-black mb-3">
          Sign In to Your Account
        </h3>
        <p className="text-gray-600 font-light">
          Enter your credentials to access your dashboard
        </p>
      </div>

      <form
        id="login-form"
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <AppInputField
          label="Email Address"
          icon="fa-envelope"
          type="email"
          placeholder="Enter your email address"
          required
          register={register("email", { ...schema.email })}
          error={errors.password?.email}
        />
        <AppInputField
          label="Password"
          icon="fa-lock"
          type="password"
          placeholder="Enter your password"
          required
          register={register("password", {
            ...schema.password,
          })}
          error={errors.password?.message}
        />

        <div id="login-options" className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-purple-primary border-black rounded focus:ring-purple-primary"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <span className="text-sm text-purple-primary hover:text-purple-dark font-medium transition-colors cursor-pointer">
            Forgot password?
          </span>
        </div>
        <AppButton
          type="submit"
          label="Sign In"
          icon={<i className="fa-solid fa-arrow-right"></i>}
          className="w-full bg-purple-primary text-white py-4 px-6 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors flex items-center justify-center space-x-2"
        />
      </form>

      <div id="divider" className="my-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
      </div>

      <div id="social-login" className="grid grid-cols-1 gap-4">
        <button className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-black font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-3">
          <i className="fa-brands fa-google text-red-500 text-lg"></i>
          <span>Continue with Google</span>
        </button>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white text-gray-700 py-3 px-4 rounded-lg border border-black font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <i className="fa-brands fa-facebook text-blue-600 text-lg"></i>
            <span>Facebook</span>
          </button>
          <button className="bg-white text-gray-700 py-3 px-4 rounded-lg border border-black font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <i className="fa-brands fa-apple text-black text-lg"></i>
            <span>Apple</span>
          </button>
        </div>
      </div>

      <div
        id="signup-link"
        className="text-center mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200"
      >
        <p className="text-gray-700">
          Don't have an account?
          <span className="text-purple-primary hover:text-purple-dark font-semibold transition-colors cursor-pointer">
            Create one here
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
