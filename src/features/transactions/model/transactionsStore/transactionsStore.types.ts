import { ApiResponse } from '@/entities/apiResponse';
import { CategoryType } from '@/entities/category';
import { Transaction } from '@/entities/transaction';
import {
  FetchTransactionsRequestDto,
  FetchTransactionsResponseDto,
} from '@/shared/api/transactions';
import {
  CreateTransactionRequestDto,
  DeleteTransactionResponseDto,
  UpdateTransactionResponseDto,
} from '@/shared/api/transactions/transactions.dto';

export interface TransactionsStore {
  transactions: Transaction[];
  setTransactions: (_transactions: Transaction[]) => void;

  totalExpenses: number;
  setTotalExpenses: (_totalExpenses: number) => void;

  totalIncome: number;
  setTotalIncome: (_totalIncome: number) => void;

  selectedMonth: number;
  setSelectedMonth: (_selectedMonth: number) => void;

  selectedYear: number;
  setSelectedYear: (_selectedYear: number) => void;

  selectedCategoryType: CategoryType;
  setSelectedCategoryType: (_selectedCategoryType: CategoryType) => void;

  selectedTransaction: Transaction | null;
  setSelectedTransaction: (_selectedTransaction: Transaction | null) => void;

  showTransactionModal: boolean;
  setShowTransactionModal: (_showTransactionModal: boolean) => void;

  fetchTransactionsLoading: boolean;
  setFetchTransactionsLoading: (_fetchTransactionsLoading: boolean) => void;

  fetchTransactionsError: Error | null | undefined;
  setFetchTransactionsError: (_fetchTransactionsError: Error | null) => void;

  createTransactionLoading: boolean;
  setCreateTransactionLoading: (_createTransactionLoading: boolean) => void;

  createTransactionError: Error | null | undefined;
  setCreateTransactionError: (_createTransactionError: Error | null) => void;

  updateTransactionLoading: boolean;
  setUpdateTransactionLoading: (_updateTransactionLoading: boolean) => void;

  updateTransactionError: Error | null | undefined;
  setUpdateTransactionError: (_updateTransactionError: Error | null) => void;

  deleteTransactionLoading: boolean;
  setDeleteTransactionLoading: (_deleteTransactionLoading: boolean) => void;

  deleteTransactionError: Error | null | undefined;
  setDeleteTransactionError: (_deleteTransactionError: Error | null) => void;

  // API calls

  fetchTransactions: (
    _data: FetchTransactionsRequestDto
  ) => Promise<ApiResponse<FetchTransactionsResponseDto>>;

  createTransaction: (
    _transaction: Partial<Transaction>
  ) => Promise<ApiResponse<CreateTransactionRequestDto>>;

  updateTransaction: (
    _transactionId: string,
    _transactionData: Partial<Transaction>
  ) => Promise<ApiResponse<UpdateTransactionResponseDto>>;

  deleteTransaction: (_transactionId: string) => Promise<ApiResponse<DeleteTransactionResponseDto>>;
}
