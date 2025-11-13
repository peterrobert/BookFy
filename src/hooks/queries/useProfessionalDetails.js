import { useQuery } from "@tanstack/react-query";
import { fetchProfessionalID } from "../../services";

export const useProfessionalDetails = (professionalId) => {
  return useQuery({
    queryKey: ["professional", professionalId],
    queryFn: () => fetchProfessionalID(professionalId),
    enabled: !!professionalId,
  });
};
