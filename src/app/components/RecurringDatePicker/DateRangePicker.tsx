'use client';

import { useRecurringStore } from '@/store/useRecurringStore';

export default function DateRangePicker() {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = useRecurringStore();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Start Date:
      </label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full mb-3 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
      />

      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        End Date (optional):
      </label>
      <input
        type="date"
        value={endDate ?? ''}
        onChange={(e) => setEndDate(e.target.value || null)}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
      />
    </div>
  );
}
