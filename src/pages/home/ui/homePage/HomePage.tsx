import { TransactionsList } from '@/features/transactions/ui/transactionsList';
import { MainLayout, Header, Content } from '@/shared/ui/layouts/mainLayout';
import { Button, Center, Flex, Image, Modal, Text, Title } from '@mantine/core';
import { useEffect } from 'react';
import { categoryTypes } from '@/entities/category';
import EmptyIllustration from '@shared/assets/illustrations/undraw_no-data.svg';
import { MonthAndTypeSelector } from '@/features/categories/ui/monthAndTypeSelector';
import { useTransactionsStore } from '@/features/transactions/model/transactionsStore';
import { Plus } from '@phosphor-icons/react';
import { TransactionForm } from '@/features/transactions/ui/transactionForm';

export function HomePage() {
  const fetchTransactions = useTransactionsStore((state) => state.fetchTransactions);
  const transactions = useTransactionsStore((state) => state.transactions);
  const totalExpenses = useTransactionsStore((state) => state.totalExpenses);
  const totalIncome = useTransactionsStore((state) => state.totalIncome);

  const selectedMonth = useTransactionsStore((state) => state.selectedMonth);
  const setSelectedMonth = useTransactionsStore((state) => state.setSelectedMonth);

  const selectedYear = useTransactionsStore((state) => state.selectedYear);
  const setSelectedYear = useTransactionsStore((state) => state.setSelectedYear);

  const selectedCategoryType = useTransactionsStore((state) => state.selectedCategoryType);
  const setSelectedCategoryType = useTransactionsStore((state) => state.setSelectedCategoryType);

  const showTransactionModal = useTransactionsStore((state) => state.showTransactionModal);
  const setShowTransactionModal = useTransactionsStore((state) => state.setShowTransactionModal);

  const setSelectedTransaction = useTransactionsStore((state) => state.setSelectedTransaction);

  // Show transactions for selected month and category type

  const onModalClose = () => {
    setShowTransactionModal(false);
    // We need this timeout to wait for the modal to close
    setTimeout(() => {
      setSelectedTransaction(null);
    }, 500);
  };

  useEffect(() => {
    fetchTransactions({
      month: selectedMonth,
      year: selectedYear,
    });
  }, [selectedMonth, selectedCategoryType]);

  return (
    <MainLayout>
      <Header>
        <Center h="270">
          <MonthAndTypeSelector
            selectedMonth={selectedMonth}
            onMonthChange={setSelectedMonth}
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            amount={selectedCategoryType === categoryTypes.income ? totalIncome : totalExpenses}
            selectedCategoryType={selectedCategoryType}
            onCategoryTypeChange={setSelectedCategoryType}
          />
        </Center>
      </Header>
      <Content>
        <Flex justify={'space-between'}>
          <Title order={1} mb="xl">
            Transactions
          </Title>

          <Button
            variant="outline"
            rightSection={<Plus size="16" />}
            onClick={() => setShowTransactionModal(true)}
          >
            Add
          </Button>
        </Flex>

        {!transactions?.length ? (
          <div style={{ textAlign: 'center' }}>
            <Image src={EmptyIllustration} w="100px" display="inline-block" mr="6px" />
            <Text> No transactions found</Text>
          </div>
        ) : (
          <TransactionsList transactions={transactions} />
        )}
      </Content>

      <Modal opened={showTransactionModal} onClose={onModalClose}>
        <TransactionForm onSuccess={onModalClose} />
      </Modal>
    </MainLayout>
  );
}
