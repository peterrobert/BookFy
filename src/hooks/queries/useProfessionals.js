import { useQuery } from "@tanstack/react-query";
import { fetchProfessionals } from "../../Services";

export const useProfessionals = () => {
  return useQuery({
    queryKey: ["professionals"],
    queryFn: fetchProfessionals,
  });
};
