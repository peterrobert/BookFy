import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../Services";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
