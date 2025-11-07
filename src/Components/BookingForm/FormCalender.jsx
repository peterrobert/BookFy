import { Fragment } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const timeSlots = [
  {
    period: "Morning",
    slots: [
      { label: "9:00 AM", isSelected: false },
      { label: "9:30 AM", isSelected: false },
      { label: "10:00 AM", isSelected: false },
      { label: "10:30 AM", isSelected: false },
      { label: "11:00 AM", isSelected: false },
      { label: "11:30 AM", isSelected: false },
    ],
  },
  {
    period: "Afternoon",
    slots: [
      { label: "1:00 PM", isSelected: false },
      { label: "1:30 PM", isSelected: false },
      { label: "2:00 PM", isSelected: true },
      { label: "2:30 PM", isSelected: false },
      { label: "3:00 PM", isSelected: false },
      { label: "3:30 PM", isSelected: false },
      { label: "4:00 PM", isSelected: false },
      { label: "4:30 PM", isSelected: false },
    ],
  },
  {
    period: "Evening",
    slots: [
      { label: "5:00 PM", isSelected: false },
      { label: "5:30 PM", isSelected: false },
      { label: "6:00 PM", isSelected: false },
    ],
  },
];

const StaticDatePickerLandscape = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="landscape" />
    </LocalizationProvider>
  );
};

const FormCalender = () => {
  const displayTimeSlots = () => {
    return timeSlots.map((periodObj) => {
      return (
        <Fragment key={periodObj.period}>
          <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            {periodObj.period}
          </h5>
          <div className="grid grid-cols-2 gap-2">
            {periodObj.slots.map((slot) => (
              <button
                key={slot.label}
                className={`border rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors ${
                  slot.isSelected
                    ? "border-purple-primary bg-purple-50 text-purple-primary font-semibold"
                    : "border-gray-300"
                }`}
              >
                {slot.label}
              </button>
            ))}
          </div>
        </Fragment>
      );
    });
  };

  return (
    <div
      id="calendar-section"
      className="bg-white border border-gray-200 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-black mb-6">Select Date & Time</h3>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <div id="calendar-widget">
          <div className="bg-gray-50 rounded-lg p-4">
            {/* -- Calender --- */}
            <StaticDatePickerLandscape />
          </div>
        </div>

        <div id="time-slots">
          <h4 className="font-semibold text-black mb-4">
            Available Times - December 18
          </h4>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {displayTimeSlots()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCalender;
