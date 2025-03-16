import { categoryTitles, categoryTypes } from './consts';

export type CategoryTitle = keyof typeof categoryTitles;

export type CategoryType = keyof typeof categoryTypes;

export type Category = {
  id: string;
  title: CategoryTitle;
  categoryType: CategoryType;
  transactionsCount: number;
  createdAt: string;
};
