import { useProfessionalDetails } from "../../hooks";

// --- COMPONENTS ---
import AppSpinner from "../AppSpinner";
import FormBody from "./FormBody";
import FormHeader from "./FormHeader";
import ProffessionalInfo from "./ProffessionalInfo";

const AppBookingForm = () => {
  const { data, isLoading, error, isError } = useProfessionalDetails(1);

  const displayFormContent = () => {
    if (isLoading) return <AppSpinner />;
    if (isError) return <AppError message={error.message} />;
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProffessionalInfo professionalData={data} />
        <FormBody professionalData={data} />
      </div>
    );
  };

  return <>{displayFormContent()}</>;
};

export default AppBookingForm;
