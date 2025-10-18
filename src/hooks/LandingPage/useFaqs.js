import { useQuery } from "@tanstack/react-query";

const fetchFaqs = async () => {
  const response = await fetch("http://localhost:4000/faqs");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const useFaqs = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFaqs,
  });
};
