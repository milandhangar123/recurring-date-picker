'use client';

import { useRecurringStore } from '@/store/useRecurringStore';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function DaySelector() {
  const {
    frequency,
    selectedDays,
    setSelectedDays,
  } = useRecurringStore();

  if (frequency !== 'weekly') return null;

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Select Days of the Week:
      </label>
      <div className="flex flex-wrap gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`px-3 py-1 border rounded-md transition ${
              selectedDays.includes(day)
                ? 'bg-blue-500 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
