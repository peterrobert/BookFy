import AppInputField from "../AppInputField";

const cardDetails = [
  {
    id: "cardNumber",
    label: "Card Number",
    type: "text",
    placeholder: "1234 5678 9012 3456",
    gridSpan: 2,
  },
  {
    id: "expiryDate",
    label: "Expiry Date",
    type: "text",
    placeholder: "MM/YY",
    gridSpan: 1,
  },
  {
    id: "cvv",
    label: "CVV",
    type: "text",
    placeholder: "123",
    gridSpan: 1,
  },
  {
    id: "cardholderName",
    label: "Cardholder Name",
    type: "text",
    placeholder: "Name as it appears on card",
    gridSpan: 2,
  },
];

const paymentMethods = [
  {
    id: "credit-card",
    label: "Credit Card",
    icon: "fa-solid fa-credit-card",
    checked: true,
    description: "",
  },
  // Add more methods later, e.g. PayPal, Mpesa, etc.
];

const FormPayment = () => {
  const displayCardDetailsFields = () => {
    return cardDetails.map((field) => (
      <div
        key={field.id}
        className={field.gridSpan === 2 ? "md:col-span-2" : ""}
      >
        <AppInputField
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
        />
      </div>
    ));
  };

  const displayPaymentMethods = () => {
    return paymentMethods.map((method) => {
      return (
        <div
          className="border  bg-purple-50 rounded-lg p-4 cursor-pointer"
          key={method.id}
        >
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment-method"
              id="credit-card"
              className="text-purple-primary"
              checked
            />
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-credit-card text-purple-primary"></i>
              <span className="font-semibold">Credit Card</span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      id="payment-section"
      className="bg-white border border-gray-200 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-black mb-6">Payment Information</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-black mb-3">
            Payment Method
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-purple-primary bg-purple-50 rounded-lg p-4 cursor-pointer">
              {displayPaymentMethods()}
            </div>
          </div>
        </div>
        {displayCardDetailsFields()}

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-black mb-3">Payment Summary</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">
                General Consultation (45 min)
              </span>
              <span className="font-semibold">$120.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Booking Fee</span>
              <span className="font-semibold">$5.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Tax</span>
              <span className="font-semibold">$10.00</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center text-lg">
              <span className="font-bold text-black">Total</span>
              <span className="font-bold text-purple-primary">$135.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPayment;
