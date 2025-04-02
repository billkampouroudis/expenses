import { useForm, zodResolver } from '@mantine/form';
import { TextInput, Button, Stack, Title, Paper, Select, NumberInput, Flex } from '@mantine/core';
import { expenseCategoryTitles, incomeCategoryTitles } from '@/entities/category';
import { DateInput } from '@mantine/dates';
import { capitalizeFirstLetter } from '@/shared/lib/string';
import { FormValues, schema, TransactionFormProps } from './transactionForm.types';
import { useTransactionsStore } from '../../model/transactionsStore';
import { useEffect } from 'react';
import { notifications } from '@mantine/notifications';
import { getValidDate } from '@/shared/lib/dates';

export function TransactionForm(props: TransactionFormProps) {
  const { onSuccess = () => {}, onError = () => {} } = props;

  const createTransaction = useTransactionsStore((state) => state.createTransaction);
  const updateTransaction = useTransactionsStore((state) => state.updateTransaction);
  const selectedTransaction = useTransactionsStore((state) => state.selectedTransaction);
  const selectedCategoryType = useTransactionsStore((state) => state.selectedCategoryType);
  const selectedMonth = useTransactionsStore((state) => state.selectedMonth);
  const selectedYear = useTransactionsStore((state) => state.selectedYear);

  const isEditMode = !!selectedTransaction;

  const form = useForm<FormValues>({
    validate: zodResolver(schema),
    initialValues: {
      categoryTitle: selectedTransaction?.categoryTitle || undefined,
      amount: selectedTransaction?.amount || undefined,
      date: selectedTransaction
        ? new Date(selectedTransaction.date)
        : getValidDate(selectedYear, selectedMonth).toDate(),
      description: selectedTransaction?.description || '',
    },
  });
  const { onSubmit, isValid } = form;

  const handleSubmit = async (values: FormValues) => {
    let res = null;
    if (isEditMode) {
      res = await updateTransaction(selectedTransaction.id, {
        ...values,
        date: values.date?.toISOString(),
      });

      if (res.data) {
        notifications.show({
          title: 'Transaction Updated Successfully!',
          message: 'Your transaction has been updated. Keep tracking your expenses effortlessly!',
          color: 'green',
        });
        onSuccess();
      }
    } else {
      res = await createTransaction({
        ...values,
        date: values.date?.toISOString(),
        categoryType: selectedCategoryType,
      });

      if (res.data) {
        notifications.show({
          title: 'Transaction Added Successfully!',
          message: 'Your transaction has been recorded. Keep tracking your expenses effortlessly!',
          color: 'green',
        });
        onSuccess();
      }
    }

    if (res.error) {
      onError(res.error);
    }
  };

  const getTitle = () => {
    if (isEditMode) {
      if (selectedCategoryType === 'income') {
        return 'Edit income';
      }
      return 'Edit expense';
    } else {
      if (selectedCategoryType === 'income') {
        return 'Add income';
      }
      return 'Add expense';
    }
  };

  useEffect(() => {
    return () => {
      form.reset();
    };
  }, []);

  return (
    <Paper pl="lg" pr="lg" pb="lg">
      <form onSubmit={onSubmit(handleSubmit)}>
        <Stack>
          <Title order={2}>{getTitle()}</Title>

          <DateInput
            label="Date"
            placeholder="Enter a date"
            maxDate={new Date()}
            valueFormat="YYYY-MM-DD"
            withAsterisk
            {...form.getInputProps('date')}
          />

          <TextInput label="Description" placeholder="" {...form.getInputProps('description')} />

          <Flex gap="sm">
            <Select
              label="Category title"
              placeholder="Enter category title"
              data={Object.values(
                selectedCategoryType === 'income' ? incomeCategoryTitles : expenseCategoryTitles
              ).map((item) => ({
                value: item,
                label: capitalizeFirstLetter(item),
              }))}
              withAsterisk
              {...form.getInputProps('categoryTitle')}
            />
            <NumberInput
              label="Amount"
              placeholder="Enter amount"
              rightSection="€"
              decimalScale={2}
              withAsterisk
              {...form.getInputProps('amount')}
            />
          </Flex>

          <Button type="submit" disabled={!isValid()} fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
