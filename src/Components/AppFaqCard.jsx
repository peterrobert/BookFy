const AppFaqCard = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <div className="bg-white border border-black rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between cursor-pointer">
        <h3 className="text-xl font-semibold text-black">{question}</h3>
        <i className="fa-solid fa-chevron-down text-gray-500"></i>
      </div>
      <p className="text-gray-600 mt-4">{answer}</p>
    </div>
  );
};

export default AppFaqCard;
