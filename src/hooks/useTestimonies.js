import { useQuery } from "@tanstack/react-query";

const fetchTestimonials = async () => {
  const response = await fetch("http://localhost:4000/testimonials");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });
};
