import { Transaction } from '@/entities/transaction';

export type TransactionItemProps = {
  transaction: Transaction;
  onClick: () => void;
};
