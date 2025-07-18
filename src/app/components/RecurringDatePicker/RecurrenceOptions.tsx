'use client';

import { useRecurringStore } from '@/store/useRecurringStore';

export default function RecurrenceOptions() {
  const {
    frequency,
    interval,
    setFrequency,
    setInterval,
  } = useRecurringStore();

  return (
    <div className="mb-4 space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Repeat every:
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          min={1}
        />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as any)}
          className="px-3 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="daily">Day(s)</option>
          <option value="weekly">Week(s)</option>
          <option value="monthly">Month(s)</option>
          <option value="yearly">Year(s)</option>
        </select>
      </div>
    </div>
  );
}
