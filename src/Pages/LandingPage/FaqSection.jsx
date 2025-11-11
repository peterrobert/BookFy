import { useFaqs } from "../../hooks/queries";
import AppFaqCard from "../../Components/AppFaqCard";
import AppSpinner from "../../Components/AppSpinner";

// --- FAQ SECTION COMPONENT --- //
const FaqSection = () => {
  const { data, isLoading, error } = useFaqs();

  const faqs = data ? data.slice(0, 4) : [];
  const displayFaqs = () => {
    if (isLoading) return <AppSpinner />;
    if (error)
      return (
        <p className="text-red-500">Sorry, there was an error loading FAQs.</p>
      );
    return faqs.map((faq) => <AppFaqCard key={faq.id} faq={faq} />);
  };

  return (
    <section id="faq-section" class="py-20 px-5 bg-white">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our platform and booking
            process.
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">{displayFaqs()}</div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
