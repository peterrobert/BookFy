import { BASEURL } from "../Api";

export const fetchFaqs = async () => {
  const response = await fetch(`${BASEURL}/faqs`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const fetchProfessionals = async () => {
  const response = await fetch(`${BASEURL}/professionals`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const fetchTestimonials = async () => {
  const response = await fetch(`${BASEURL}/testimonials`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
