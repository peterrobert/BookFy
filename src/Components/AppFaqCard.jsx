const AppFaqCard = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <div class="bg-white border border-black rounded-xl p-6 shadow-lg">
      <div class="flex items-center justify-between cursor-pointer">
        <h3 class="text-xl font-semibold text-black">{question}</h3>
        <i class="fa-solid fa-chevron-down text-gray-500"></i>
      </div>
      <p class="text-gray-600 mt-4">{answer}</p>
    </div>
  );
};

export default AppFaqCard;
