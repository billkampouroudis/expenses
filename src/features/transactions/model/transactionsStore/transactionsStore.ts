import { fetchTransactions } from '@/shared/api/transactions';
import { createTransaction, updateTransaction } from '@/shared/api/transactions/transactions.api';
import { handleError } from '@/shared/lib/errorHandling';
import dayjs from 'dayjs';
import { create } from 'zustand';
import { TransactionsStore } from './transactionsStore.types';
import { categoryTypes } from '@/entities/category';
import { devtools } from 'zustand/middleware';

export const useTransactionsStore = create<TransactionsStore>()(
  devtools((set) => ({
    transactions: [],
    setTransactions: (transactions) => set({ transactions }),

    totalExpenses: 0,
    setTotalExpenses: (totalExpenses) => set({ totalExpenses }),

    totalIncome: 0,
    setTotalIncome: (totalIncome) => set({ totalIncome }),

    selectedMonth: dayjs().month(),
    setSelectedMonth: (selectedMonth) => set({ selectedMonth }),

    selectedYear: dayjs().year(),
    setSelectedYear: (selectedYear) => set({ selectedYear }),

    selectedCategoryType: categoryTypes.expense,
    setSelectedCategoryType: (selectedCategoryType) => set({ selectedCategoryType }),

    selectedTransaction: null,
    setSelectedTransaction: (selectedTransaction) => set({ selectedTransaction }),

    showTransactionModal: false,
    setShowTransactionModal: (showTransactionModal) => set({ showTransactionModal }),

    fetchTransactionsLoading: false,
    setFetchTransactionsError: (fetchTransactionsError) => set({ fetchTransactionsError }),

    fetchTransactionsError: null,
    setFetchTransactionsLoading: (fetchTransactionsLoading) => set({ fetchTransactionsLoading }),

    createTransactionLoading: false,
    setCreateTransactionLoading: (createTransactionLoading) => set({ createTransactionLoading }),

    createTransactionError: null,
    setCreateTransactionError: (createTransactionError) => set({ createTransactionError }),

    updateTransactionLoading: false,
    setUpdateTransactionLoading: (updateTransactionLoading) => set({ updateTransactionLoading }),

    updateTransactionError: null,
    setUpdateTransactionError: (updateTransactionError) => set({ updateTransactionError }),

    // API calls

    fetchTransactions: async (data = {}) => {
      set({ fetchTransactionsLoading: true, fetchTransactionsError: null });
      try {
        const response = await fetchTransactions(data);
        set({
          transactions: response.transactions,
          totalExpenses: response.totalExpenses,
          totalIncome: response.totalIncome,
        });

        return { data: response, error: null };
      } catch (error) {
        const handledError = handleError(error, (err) => set({ fetchTransactionsError: err }));
        return { data: null, error: handledError };
      } finally {
        set({ fetchTransactionsLoading: false });
      }
    },

    createTransaction: async (transaction) => {
      set({ createTransactionLoading: true, createTransactionError: null });
      try {
        const response = await createTransaction(transaction);
        // Add the new transaction to the list
        set({
          transactions: response.transactions,
          totalExpenses: response.totalExpenses,
          totalIncome: response.totalIncome,
        });
        return { data: response, error: null };
      } catch (error) {
        const handledError = handleError(error, (err) => set({ createTransactionError: err }));
        return { data: null, error: handledError };
      } finally {
        set({ createTransactionLoading: false });
      }
    },

    updateTransaction: async (transactionId, transactionData) => {
      set({ updateTransactionLoading: true, updateTransactionError: null });
      try {
        const response = await updateTransaction(transactionId, transactionData);

        if (response) {
          set({
            transactions: response.transactions,
            totalExpenses: response.totalExpenses,
            totalIncome: response.totalIncome,
          });
        }

        return { data: response, error: null };
      } catch (error) {
        const handledError = handleError(error, (err) => set({ updateTransactionError: err }));
        return { data: null, error: handledError };
      } finally {
        set({
          updateTransactionLoading: false,
        });
      }
    },
  }))
);
