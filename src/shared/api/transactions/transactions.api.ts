import { Transaction } from '@/entities/transaction';
import { isExpense, isIncome } from '@/shared/lib/is';
import { getStorage, setStorage } from '@/shared/lib/storage';
import {
  CreateTransactionRequestDto,
  CreateTransactionResponseDto,
  FetchTransactionsRequestDto,
  FetchTransactionsResponseDto,
  TransactionActiveFiltersDto,
  UpdateTransactionRequestDto,
  UpdateTransactionResponseDto,
} from './transactions.dto';
import { categoryTypes } from '@/entities/category';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export const fetchTransactions = async (
  data: FetchTransactionsRequestDto = {}
): Promise<FetchTransactionsResponseDto> => {
  let transactions: Transaction[] = (await getStorage('transactions')) || [];
  const { categoryType, month, year } = data;
  let totalExpenses = 0;
  let totalIncome = 0;

  // If filters are applied
  if (categoryType || month !== undefined) {
    transactions = transactions?.filter((transaction: Transaction) => {
      let categoryMatch = true;
      if (categoryType) {
        categoryMatch =
          categoryType === categoryTypes.income ? isIncome(transaction) : isExpense(transaction);
      }

      let monthMatch = true;
      if (month !== undefined) {
        monthMatch = dayjs(transaction.date).month() === month;
      }

      let yearMatch = true;
      if (year !== undefined) {
        yearMatch = dayjs(transaction.date).year() === year;
      }

      const includeTransaction = categoryMatch && monthMatch && yearMatch;

      if (includeTransaction) {
        if (isIncome(transaction)) {
          totalIncome += transaction.amount;
        } else {
          totalExpenses += transaction.amount;
        }
      }

      return includeTransaction;
    });
  } else {
    transactions?.forEach((transaction) => {
      if (isIncome(transaction)) {
        totalIncome += transaction.amount;
      } else {
        totalExpenses += transaction.amount;
      }
    });
  }

  return {
    transactions,
    totalExpenses,
    totalIncome,
  };
};

export const createTransaction = async (
  transaction: CreateTransactionRequestDto,
  activeFilters: TransactionActiveFiltersDto = {}
): Promise<CreateTransactionResponseDto> => {
  const newTransaction = {
    ...transaction,
    createdAt: dayjs().toISOString(),
    id: uuidv4(),
  } as unknown as Transaction;

  const transactions = (await getStorage('transactions')) || [];
  transactions.unshift(newTransaction);

  await setStorage('transactions', JSON.stringify(transactions));
  const fetchResults = await fetchTransactions({ ...activeFilters });

  return fetchResults;
};

export const updateTransaction = async (
  transactionId: string,
  transactionData: UpdateTransactionRequestDto,
  activeFilters: TransactionActiveFiltersDto = {}
): Promise<UpdateTransactionResponseDto> => {
  const transactions = await getStorage('transactions');

  let updatedTransaction: Transaction | null = null;
  const updatedTransactions = transactions.map((t: Transaction) => {
    if (transactionId === t.id) {
      updatedTransaction = { ...t, ...transactionData };
      return updatedTransaction;
    }
    return t;
  });

  if (updatedTransaction) {
    await setStorage('transactions', JSON.stringify(updatedTransactions));

    const fetchResults = await fetchTransactions({ ...activeFilters });

    return fetchResults;
  } else {
    throw new Error('Transaction not found');
  }
};
