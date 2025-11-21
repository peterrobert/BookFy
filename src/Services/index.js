import { BASEURL } from "../API";

export const fetchFaqs = async () => {
  const response = await fetch(`${BASEURL}`);
  if (!response.ok) throw new Error("Network response was not ok");

  const data = await response.json();
  return data.faqs;
};

export const fetchProfessionals = async () => {
  const response = await fetch(`${BASEURL}`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  return data.professionals;
};

export const fetchTestimonials = async () => {
  const response = await fetch(`${BASEURL}`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  return data.testimonials;
};

export const fetchCategories = async () => {
  const response = await fetch(`${BASEURL}`);
  if (!response.ok) throw new Error("Network response was not ok");

  const data = await response.json();
  return data.categories;
};

export const fetchAppointments = async () => {
  const response = await fetch(`${BASEURL}`);
  if (!response.ok) throw new Error("Network response was not ok");

  const data = await response.json();
  return data.upcomingAppointments;
};

export const fetchProfessionalID = async (id) => {
  const response = await fetch(`${BASEURL}`);
  if (!response.ok) throw new Error("Network response was not ok");

  const data = await response.json();
  return data.professionals.find((p) => p.id == id);
};
