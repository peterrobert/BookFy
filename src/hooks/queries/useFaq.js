import { useQuery } from "@tanstack/react-query";
import { fetchFaqs } from "../../Services";

export const useFaqs = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFaqs,
  });
};
