/* eslint-disable no-unused-vars */
import { CategoryType } from '@/entities/category';

export type categoryTypeTypes = {
  categoryType: CategoryType;
  onCategoryTypeChange: (categoryType: CategoryType) => void;
};
