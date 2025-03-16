import { CategoryType } from '@/entities/category';

/* eslint-disable no-unused-vars */
export type MonthAndTypeSelectorProps = {
  selectedMonth: number;
  onMonthChange: (month: number) => void;
  selectedYear: number;
  onYearChange: (year: number) => void;
  amount: number;
  selectedCategoryType: CategoryType;
  onCategoryTypeChange: (categoryType: CategoryType) => void;
};
