import { Fragment } from "react";

const progressBarStep = [
  { number: 1, label: "Professional", completed: false },
  { number: 2, label: "Service", completed: false },
  { number: 3, label: "Date & Time", completed: false },
  { number: 4, label: "Details", completed: false },
  { number: 5, label: "Payment", completed: false },
];

const FormHeader = () => {
  const displayProgressBar = () => {
    return progressBarStep.map((step) => {
      return (
        <Fragment key={step.number}>
          <div className="flex items-center space-x-2">
            <div
              className={`w-8 h-8 ${
                step.completed
                  ? "bg-purple-primary text-white"
                  : "bg-gray-300 text-purple-primary"
              } rounded-full flex items-center justify-center font-semibold text-sm`}
            >
              {step.number}
            </div>
            <span
              className={`text-sm font-medium ${
                step.completed ? "text-purple-primary" : "text-grey-300"
              } `}
            >
              {step.label}
            </span>
          </div>
          {step.completed && step.number !== 5 ? (
            <div className="w-16 h-0.5 bg-purple-primary"></div>
          ) : (
            step.number !== 5 && <div className="w-16 h-0.5 bg-gray-300"></div>
          )}
        </Fragment>
      );
    });
  };
  return (
    <>
      <div
        id="modal-header"
        className="flex items-center justify-between p-6 border-b border-gray-200 "
      >
        <div className="flex items-center space-x-4">
          <button
            id="back-button"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <i className="fa-solid fa-arrow-left text-xl"></i>
          </button>
          <h2 className="text-2xl font-bold text-black">Book Appointment</h2>
        </div>
        <button
          id="close-modal"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <i className="fa-solid fa-times text-xl"></i>
        </button>
      </div>

      <div
        id="progress-bar"
        className="px-6 py-4 bg-gray-50 border-b border-gray-200 text-center"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 ">
            {displayProgressBar()}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormHeader;
