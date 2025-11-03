import { useQuery } from "@tanstack/react-query";
import {
  fetchProfessionals,
  fetchTestimonials,
  fetchFaqs,
  fetchCategories,
  fetchAppointments,
  fetchProfessionalID,
} from "../Services";

export const useFaqs = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFaqs,
  });
};

export const useProfessionals = () => {
  return useQuery({
    queryKey: ["professionals"],
    queryFn: fetchProfessionals,
  });
};

export const useProfessionalDetails = (professionalId) => {
  return useQuery({
    queryKey: ["professional", professionalId],
    queryFn: () => fetchProfessionalID(professionalId),
    enabled: !!professionalId,
  });
};

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

export const useAppointments = () => {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: fetchAppointments,
  });
};
