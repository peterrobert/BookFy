import AppButton from "../../../components/AppButton";

const AccountTypeCard = ({ type, handleSelectedType }) => {
  return (
    <div
      key={type.id}
      id={`${type.id}-account-card`}
      className="bg-white p-8 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group"
    >
      <div className="text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-primary transition-colors">
          <i
            className={`${type.iconClass} text-purple-primary text-3xl group-hover:text-white`}
          ></i>
        </div>
        <h3 className="text-2xl font-bold text-black mb-4">{type.title}</h3>
        <p className="text-gray-600 mb-6 font-light">{type.description}</p>
        <ul className="text-left space-y-3 mb-8">
          {type.features.map((feature, index) => (
            <li key={index} className="flex items-center font-light">
              <i className="fa-solid fa-check text-purple-primary mr-3"></i>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <AppButton
          onClick={() => handleSelectedType(type.id)}
          label={type.buttonText}
          className="w-full bg-purple-primary text-white py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors"
        />
      </div>
    </div>
  );
};

export default AccountTypeCard;
