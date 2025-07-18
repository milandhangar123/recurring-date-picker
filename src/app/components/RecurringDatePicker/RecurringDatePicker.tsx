'use client';

import RecurrenceOptions from './RecurrenceOptions';
import DaySelector from './DaySelector';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';

export default function RecurringDatePicker() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Recurring Date Picker</h2>
      <RecurrenceOptions />
      <DaySelector />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}
