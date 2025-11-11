import { useModal } from "../../Context/ModalContext";
import { useProfessionalDetails } from "../../hooks/queries";

// --- COMPONENTS ---
import AppSpinner from "../AppSpinner";
import FormBody from "./FormBody";
import ProffessionalInfo from "./ProffessionalInfo";

const AppBookingForm = () => {
  const { modalProps } = useModal();
  const { data, isLoading, error, isError } = useProfessionalDetails(
    modalProps.professionalId
  );
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
