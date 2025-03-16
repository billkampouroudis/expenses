import { ActionIcon, Card, em, Flex, Grid, Menu, Text, Title } from '@mantine/core';
import styles from './transactionItem.module.scss';
import {
  HouseLine,
  ShoppingCartSimple,
  CarSimple,
  FirstAidKit,
  Bank,
  Receipt,
  Coins,
  Gift,
  DotsThreeVertical,
  Trash,
} from '@phosphor-icons/react';
import { categoryTitles } from '@/entities/category';
import { TransactionItemProps } from './transactionItem.types';
import dayjs from 'dayjs';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/shared/config/theme';
import React from 'react';
import { modals } from '@mantine/modals';
import { useTransactionsStore } from '../../model/transactionsStore';

export function TransactionItem(props: TransactionItemProps) {
  const { transaction, onClick } = props;

  const deleteTransaction = useTransactionsStore((state) => state.deleteTransaction);

  const isMobile = useMediaQuery(`(max-width: ${em(theme.breakpoints?.sm)})`);

  const dt = dayjs(transaction.date);

  const getIcon = () => {
    const iconProps = { size: 24 };

    switch (transaction.categoryTitle) {
      case categoryTitles.housing:
        return <HouseLine {...iconProps} />;
      case categoryTitles.groceries:
        return <ShoppingCartSimple {...iconProps} />;
      case categoryTitles.transportation:
        return <CarSimple {...iconProps} />;
      case categoryTitles.healthcare:
        return <FirstAidKit {...iconProps} />;
      case categoryTitles.debts:
        return <Bank {...iconProps} />;
      case categoryTitles.other:
        return <Receipt {...iconProps} />;
      case categoryTitles.paycheck:
        return <Coins {...iconProps} />;
      case categoryTitles.gift:
        return <Gift {...iconProps} />;
      default:
        return <Receipt {...iconProps} />;
    }
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const deleteItem = (e: React.MouseEvent) => {
    e.stopPropagation();

    modals.openConfirmModal({
      title: 'Delete transaction',
      children: <Text size="sm">Are you sure you want to delete this transaction?</Text>,
      labels: { confirm: 'Yes', cancel: 'Cancel' },
      onConfirm: () => deleteTransaction(transaction.id),
    });
  };

  return (
    <div className={styles.transactionItem} onClick={onClick}>
      <Flex align="center" gap="sm">
        <Card className={styles.transactionItemIcon}>{getIcon()}</Card>

        <div className={styles.transactionItemBody}>
          <Grid>
            <Grid.Col span={isMobile ? 9 : 5}>
              <Title order={4} size="h6" mb="2px">
                {transaction.categoryTitle}
              </Title>

              <Text size="sm" c="ironwood.2" hiddenFrom="sm">
                {transaction.description}
              </Text>

              <Text size="sm" c="ironwood.2">
                {dt.format('ddd DD MMM YYYY')}
              </Text>
            </Grid.Col>

            <Grid.Col span={4} visibleFrom="sm">
              <Text size="sm" c="ironwood.2">
                {transaction.description}
              </Text>
            </Grid.Col>

            <Grid.Col span={3}>
              <Flex justify="end">
                <Text fw={600} ta="right" mr="sm">
                  {transaction.amount}€
                </Text>

                <Menu position="bottom-end">
                  <Menu.Target>
                    <ActionIcon variant="subtle" aria-label="Actions" onClick={handleMenuClick}>
                      <DotsThreeVertical />
                    </ActionIcon>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>Actions</Menu.Label>
                    <Menu.Item color="red" leftSection={<Trash />} onClick={deleteItem}>
                      Delete transaction
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Flex>
            </Grid.Col>
          </Grid>
        </div>
      </Flex>
    </div>
  );
}
