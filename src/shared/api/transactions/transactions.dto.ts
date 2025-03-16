import { CategoryType } from '@/entities/category';
import { CategoryTitle } from '@/entities/category/model';
import { Transaction } from '@/entities/transaction';

export type FetchTransactionsRequestDto = {
  categoryType?: CategoryType;
  month?: number;
  year?: number;
};

export type FetchTransactionsResponseDto = {
  transactions: Transaction[];
  totalExpenses: number;
  totalIncome: number;
};

export type CreateTransactionRequestDto = Partial<Transaction>;

export type CreateTransactionResponseDto = {
  transactions: Transaction[];
  totalExpenses: number;
  totalIncome: number;
};

export type UpdateTransactionRequestDto = {
  description?: string;
  categoryTitle?: CategoryTitle;
  amount?: number;
  date?: string;
  categoryType?: CategoryType;
};

export type UpdateTransactionResponseDto = {
  transactions: Transaction[];
  totalExpenses: number;
  totalIncome: number;
} | null;

export type TransactionActiveFiltersDto = {
  categoryType?: CategoryType;
  month?: number;
  year?: number;
};

export type DeleteTransactionResponseDto = {
  transactions: Transaction[];
  totalExpenses: number;
  totalIncome: number;
} | null;
