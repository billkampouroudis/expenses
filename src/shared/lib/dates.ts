import dayjs from 'dayjs';

// Function to get a valid date within the selected month
export const getValidDate = (year: number, month: number) => {
  const day = dayjs().date(); // Get current day
  let newDate = dayjs().year(year).month(month).date(day); // Try to construct the date
  console.log(newDate.toString());

  // If the day is out of bounds, use the last day of the month
  if (newDate.month() !== month) {
    // We need to subtract 1 month to get the correct month because if day is out of bounds the month is incremented
    newDate = newDate.subtract(1, 'month').endOf('month');
  }

  return newDate;
};
