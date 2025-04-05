import { ActionIcon, Flex, Text, Title } from '@mantine/core';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { MonthAndTypeSelectorProps } from './monthAndTypeSelector.types';
import { CategoryTypeTabs } from '../categoryTypeTabs';
import dayjs from 'dayjs';
import { useTransactionsStore } from '@/features/transactions/model/transactionsStore';
import { MonthAndTypeSelectorSkeleton } from './MonthAndTypeSelector.skeleton';

export function MonthAndTypeSelector(props: MonthAndTypeSelectorProps) {
  const {
    selectedMonth,
    onMonthChange,
    selectedYear,
    onYearChange,
    amount,
    selectedCategoryType,
    onCategoryTypeChange,
  } = props;

  const fetchTransactionsLoading = useTransactionsStore((state) => state.fetchTransactionsLoading);

  const selectNextMonth = () => {
    if (selectedMonth < 11) {
      onMonthChange(selectedMonth + 1);
    } else {
      onMonthChange(0);
      onYearChange(selectedYear + 1);
    }
  };

  const selectPreviousMonth = () => {
    if (selectedMonth > 0) {
      onMonthChange(selectedMonth - 1);
    } else {
      onMonthChange(11);
      onYearChange(selectedYear - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Flex gap="md" align="center">
        <ActionIcon variant="filled" aria-label="Previous month" onClick={selectPreviousMonth}>
          <CaretLeft />
        </ActionIcon>

        {fetchTransactionsLoading ? (
          <MonthAndTypeSelectorSkeleton />
        ) : (
          <div>
            <Text c="white" style={{ minWidth: '200px' }}>
              {dayjs().month(selectedMonth).locale('en').format('MMMM')} {selectedYear}
            </Text>
            <Title order={2} size="h1" c="white">
              {amount}€
            </Title>
          </div>
        )}

        <ActionIcon variant="filled" aria-label="Next month" onClick={selectNextMonth}>
          <CaretRight />
        </ActionIcon>
      </Flex>

      <CategoryTypeTabs
        categoryType={selectedCategoryType}
        onCategoryTypeChange={onCategoryTypeChange}
      />
    </div>
  );
}
