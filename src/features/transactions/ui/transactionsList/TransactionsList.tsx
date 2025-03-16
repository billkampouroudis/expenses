import { TransactionItem } from '../transactionItem';
import { TransactionsListProps } from './transactionsList.types';
import styles from './transactionsList.module.scss';
import { useTransactionsStore } from '../../model/transactionsStore';

export function TransactionsList(props: TransactionsListProps) {
  const { transactions } = props;

  const setSelectedTransaction = useTransactionsStore((state) => state.setSelectedTransaction);
  const setShowTransactionModal = useTransactionsStore((state) => state.setShowTransactionModal);

  return (
    <div className={styles.transactionsList}>
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={index}
          transaction={transaction}
          onClick={() => {
            setSelectedTransaction(transaction);
            setShowTransactionModal(true);
          }}
        />
      ))}
    </div>
  );
}
