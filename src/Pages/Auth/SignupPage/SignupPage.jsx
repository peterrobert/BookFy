import AccountTypeSelection from "./AccountTypeSelection";
import RegistrationProcess from "./RegistrationProcess";

const SignupPage = () => {
  return (
    <>
      <section
        id="registration-hero"
        className="bg-gradient-to-br from-purple-50 to-white py-12 px-5"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Join Bookfy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Create your account to start booking appointments or join as a
            professional to grow your business
          </p>
        </div>
      </section>
      <AccountTypeSelection />
      <RegistrationProcess />
    </>
  );
};

export default SignupPage;
