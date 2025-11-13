import { useQuery } from "@tanstack/react-query";
import { fetchTestimonials } from "../../services";

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });
};
