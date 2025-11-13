import { useQuery } from "@tanstack/react-query";
import { fetchProfessionals } from "../../services";

export const useProfessionals = () => {
  return useQuery({
    queryKey: ["professionals"],
    queryFn: fetchProfessionals,
  });
};
