import React from "react";
import AppReviewCard from "../../Layouts/AppReviewCard";
import { useTestimonials } from "../../hooks";
import AppSpinner from "../../Components/AppSpinner";

const TestimonySection = () => {
  const { data, isLoading, error } = useTestimonials();
  const testimonials = data ? data.slice(0, 3) : [];

  const displayTestimonials = () => {
    if (isLoading) return <AppSpinner />;
    if (error)
      return (
        <p className="text-red-500">
          Sorry, there was an error loading testimonials.
        </p>
      );
    return testimonials.map((testimonial) => (
      <AppReviewCard key={testimonial.id} testimonial={testimonial} />
    ));
  };
  return (
    <section id="testimonials-section" className="py-20 px-5 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Appointment Palette
            for their booking needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials()}
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
