import { generateRecurringDates } from '@/utils/generateRecurringDates';

test('generates daily recurring dates', () => {
  const startDate = '2025-07-20';
  const endDate = '2025-07-23';
  const dates = generateRecurringDates(startDate, endDate, 'daily', 1, []);
  expect(dates).toEqual(['2025-07-20', '2025-07-21', '2025-07-22', '2025-07-23']);
});

