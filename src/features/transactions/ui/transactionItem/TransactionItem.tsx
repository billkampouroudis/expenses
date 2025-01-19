import { Card, em, Flex, Grid, Text, Title } from '@mantine/core';
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
} from '@phosphor-icons/react';
import { categoryTitles } from '@/entities/category';
import { TransactionItemProps } from './transactionItem.types';
import dayjs from 'dayjs';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/shared/config/theme';

export function TransactionItem(props: TransactionItemProps) {
  const { transaction, onClick } = props;

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

  return (
    <div className={styles.transactionItem} onClick={onClick}>
      <Flex align="center" gap="sm">
        <Card className={styles.transactionItemIcon}>{getIcon()}</Card>

        <div className={styles.transactionItemBody}>
          <Grid>
            <Grid.Col span={isMobile ? 10 : 5}>
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

            <Grid.Col span={5} visibleFrom="sm">
              <Text size="sm" c="ironwood.2">
                {transaction.description}
              </Text>
            </Grid.Col>

            <Grid.Col span={2}>
              <Text fw={600} ta="right">
                {transaction.amount}€
              </Text>
            </Grid.Col>
          </Grid>
        </div>
      </Flex>
    </div>
  );
}
