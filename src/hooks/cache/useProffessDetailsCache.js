import { useQueryClient } from "@tanstack/react-query";

export const useProffessDetailsCache = (id) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["professional", id]);
  return data;
};
