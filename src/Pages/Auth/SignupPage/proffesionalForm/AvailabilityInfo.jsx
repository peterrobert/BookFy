import AppInputField from "../../../../Components/AppInputField";
import AppSelectField from "../../../../Components/AppSelectField";

const weekDays = [
  { id: 1, name: "Monday" },
  { id: 2, name: "Tuesday" },
  { id: 3, name: "Wenesday" },
  { id: 4, name: "Thursday" },
  { id: 5, name: "Friday" },
  { id: 6, name: "Saturday" },
  { id: 7, name: "Sunday" },
];

const reminderOptions = [
  { value: 1, label: "1 day in advance" },
  { value: 3, label: "3 days in advance" },
  { value: 7, label: "1 week in advance" },
  { value: 14, label: "2 weeks in advance" },
  { value: 30, label: "1 month in advance" },
];

const reminderHoursOptions = [
  { value: 1, label: "1 hour" },
  { value: 2, label: "2 hours" },
  { value: 4, label: "4 hours" },
  { value: 24, label: "24 hours" },
  { value: 48, label: "48 hours" },
];

const reminderMinutesOptions = [
  { value: 15, label: "15 minutes" },
  { value: 30, label: "30 minutes" },
  { value: 60, label: "60 minutes" },
  { value: 90, label: "90 minutes" },
  { value: 120, label: "120 minutes" },
];

const AvailabilityInfo = () => {
  const displayInputs = () => {
    const result = weekDays.map((value) => {
      return (
        <div class="flex items-center space-x-3" key={value.id}>
          <AppInputField type="checkbox" />

          <span className="text-sm text-gray-700 w-20">{value.name}</span>
          <AppInputField type="time" />

          <span className="text-gray-500">to</span>
          <AppInputField type="time" />
        </div>
      );
    });
    return result;
  };

  return (
    <div id="availability-settings" className="space-y-6 pt-6">
      <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">
        Availability Settings
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Typical Working Hours
          </label>
          <div className="space-y-3">{displayInputs()}</div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Booking Settings
          </label>
          <div className="space-y-4">
            <div>
              <AppSelectField
                label="Advance Booking Window"
                options={reminderOptions}
              />
            </div>
            <div>
              <AppSelectField
                label="Minimum Notice Period"
                options={reminderHoursOptions}
              />
            </div>
            <div>
              <AppSelectField
                label="Time Slot Duration"
                options={reminderMinutesOptions}
              />
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-primary border-black rounded focus:ring-purple-primary"
              />
              <label className="text-sm text-gray-700">
                Allow same-day bookings
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-primary border-black rounded focus:ring-purple-primary"
              />
              <label className="text-sm text-gray-700">
                Allow weekend bookings
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityInfo;
