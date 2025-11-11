import { useQuery } from "@tanstack/react-query";
import { fetchAppointments } from "../../Services";

export const useAppointments = () => {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: fetchAppointments,
  });
};
