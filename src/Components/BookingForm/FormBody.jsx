import FormAppointmentType from "./FormAppointmentType";
import FormButtons from "./FormButtons";
import FormCalender from "./FormCalender";
import FormPayment from "./FormPayment";
import FormPersonalDetails from "./FormPersonalDetails";
import FormServiceSelection from "./FormServiceSelection";

const FormBody = ({ professionalData }) => {
  const { skills, price } = professionalData;

  return (
    <div id="booking-form" className="lg:col-span-2">
      <div className="space-y-8">
        <FormServiceSelection skills={skills} price={price} />
        <FormAppointmentType />
        <FormCalender />
        <FormPersonalDetails />
        <FormPayment />
        <FormButtons />
      </div>
    </div>
  );
};

export default FormBody;
