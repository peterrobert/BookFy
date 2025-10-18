import { useQuery } from "@tanstack/react-query";

const fetchProfessionals = async () => {
  const response = await fetch("http://localhost:4000/professionals");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const useProfessionals = () => {
  return useQuery({
    queryKey: ["professionals"],
    queryFn: fetchProfessionals,
  });
};
