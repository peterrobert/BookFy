// --- PROFFESIONAL INFO LIKE TITLE , YEARS OF EXPERIENCE ---

import AppInputField from "../../../../Components/AppInputField";
import AppSelectField from "../../../../Components/AppSelectField";

const categories = [
  { value: "healthcare", label: "Healthcare" },
  { value: "beauty-spa", label: "Beauty & Spa" },
  { value: "fitness", label: "Fitness" },
  { value: "consulting", label: "Consulting" },
  { value: "education", label: "Education" },
  { value: "home-services", label: "Home Services" },
  { value: "other", label: "Other" },
];

const experienceOptions = [
  { value: "", label: "Select experience" },
  { value: "0-1", label: "Less than 1 year" },
  { value: "1-3", label: "1-3 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "5-10", label: "5-10 years" },
  { value: "10+", label: "10+ years" },
];

const Professionalinfo = ({ register, schema, errors }) => {
  return (
    <div id="professional-details" className="space-y-8 pt-4">
      <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">
        Professional Details
      </h3>
      <div>
        <AppInputField
          label="Professional Title *"
          placeholder="e.g., Licensed Massage Therapist, Hair Stylist, Personal Trainer"
          type="text"
          required
          register={register("proffesional_title", {
            ...schema.proffesional_title,
          })}
          error={errors.proffesional_title?.message}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <AppSelectField
            id="category"
            label="Category"
            options={categories}
            required
            register={register("category", {
              required: "Please select a category",
            })}
            error={errors.category?.message}
          />
        </div>

        <div>
          <AppSelectField
            id="year_of_experience"
            label="Years of experience"
            options={experienceOptions}
            required
            register={register("year_of_exerience", {
              required: "Please select your years of experience",
            })}
            error={errors.years_experience?.message}
          />
        </div>
      </div>
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">
          Professional Bio *
        </label>
        <textarea
          required
          register={register("bio", {
            required: "Please tell us about your experience",
          })}
          error={errors.bio?.message}
          rows="4"
          class="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary"
          placeholder="Tell potential clients about your background, specialties, and what makes you unique..."
        ></textarea>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <AppInputField
            label="License Number"
            placeholder="Enter license number (if applicable)"
            type="text"
            required
            register={register("licence_number", {
              ...schema.licence_number,
            })}
            error={errors.password?.licence_number}
          />
        </div>
        <div>
          <AppInputField
            label="Certifications"
            placeholder="List your certifications"
            type="text"
            required
            register={register("certifications", {
              ...schema.certifications,
            })}
            error={errors.password?.certifications}
          />
        </div>
      </div>
    </div>
  );
};

export default Professionalinfo;
