import { useQuery } from "@tanstack/react-query";
import { fetchTestimonials } from "../../Services";

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });
};
