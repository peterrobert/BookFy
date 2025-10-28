import AppInputField from "../../../../Components/AppInputField";

const AccountSecurityInfo = ({ register, schema, errors }) => {
  return (
    <div id="account-security" className="space-y-6">
      <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">
        Account Security
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <AppInputField
            label="Password *"
            placeholder="Create a secure password"
            icon="fa-lock"
            type="password"
            required
            register={register("password", {
              ...schema.password,
            })}
            error={errors.password?.message}
          />

          <p class="text-xs text-gray-500 mt-1">
            Must be at least 8 characters with uppercase, lowercase, and numbers
          </p>
        </div>
        <div>
          <AppInputField
            label="Password *"
            placeholder="Create a secure password"
            icon="fa-lock"
            type="password"
            required
            register={register("password", {
              ...schema.password,
            })}
            error={errors.password?.message}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSecurityInfo;
