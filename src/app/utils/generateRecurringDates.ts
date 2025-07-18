import { addDays, addWeeks, addMonths, addYears, isBefore, parseISO } from 'date-fns';

export function generateRecurringDates(
  startDate: string,
  endDate: string | null,
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
  interval: number,
  selectedDays: string[]
): string[] {
  if (!startDate) return [];

  const result: string[] = [];
  const start = parseISO(startDate);
  const end = endDate ? parseISO(endDate) : addMonths(start, 3); // Default: 3 months ahead

  let current = start;

  while (isBefore(current, end) || current.getTime() === end.getTime()) {
    const dayName = current.toLocaleString('en-US', { weekday: 'short' });

    if (frequency === 'weekly') {
      if (selectedDays.includes(dayName)) {
        result.push(current.toISOString().split('T')[0]);
      }
      current = addDays(current, 1); // go to next day
    } else {
      result.push(current.toISOString().split('T')[0]);

      switch (frequency) {
        case 'daily':
          current = addDays(current, interval);
          break;
        case 'monthly':
          current = addMonths(current, interval);
          break;
        case 'yearly':
          current = addYears(current, interval);
          break;
      }
    }
  }

  return result;
}
