export function getStartDate(): Date {
  const startDate = new Date();
  startDate.setFullYear(2024);
  startDate.setMonth(0);
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);
  return startDate;
}

export interface TimeWorking {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateTimeWorking(startDate: Date): TimeWorking {
  const now = new Date();
  const diffMs = now.getTime() - startDate.getTime();

  // Calculate time components
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
