import { useQuery } from "@tanstack/react-query";
import { fetchAppointments } from "../../services";

export const useAppointments = () => {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: fetchAppointments,
  });
};
