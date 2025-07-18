import { create } from 'zustand';

type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface RecurringState {
  frequency: Frequency;
  interval: number;
  selectedDays: string[];
  startDate: string;
  endDate: string | null;
  setFrequency: (f: Frequency) => void;
  setInterval: (i: number) => void;
  setSelectedDays: (d: string[]) => void;
  setStartDate: (d: string) => void;
  setEndDate: (d: string | null) => void;
}

export const useRecurringStore = create<RecurringState>((set) => ({
  frequency: 'daily',
  interval: 1,
  selectedDays: [],
  startDate: '',
  endDate: null,
  setFrequency: (frequency) => set({ frequency }),
  setInterval: (interval) => set({ interval }),
  setSelectedDays: (selectedDays) => set({ selectedDays }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));
