'use client';

import { useRecurringStore } from '@/store/useRecurringStore';
import { generateRecurringDates } from '@/utils/generateRecurringDates';

export default function CalendarPreview() {
  const {
    frequency,
    interval,
    selectedDays,
    startDate,
    endDate,
  } = useRecurringStore();

  const dates = generateRecurringDates(
    startDate,
    endDate,
    frequency,
    interval,
    selectedDays
  );

  if (!startDate) return null;

  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Preview of Recurring Dates:
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {dates.map((date, index) => (
          <div
            key={index}
            className="text-sm text-center py-1 px-2 border rounded bg-gray-100 dark:bg-gray-700"
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}
