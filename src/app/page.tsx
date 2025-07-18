// src/app/page.tsx

import RecurringDatePicker from '@/components/RecurringDatePicker/RecurringDatePicker';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black-100">
      <RecurringDatePicker />
    </main>
  );
}
