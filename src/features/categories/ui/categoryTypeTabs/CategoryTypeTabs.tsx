import { CategoryType, categoryTypes } from '@/entities/category';
import { Tabs } from '@mantine/core';
import { categoryTypeTypes } from './categoryTypeTabs.types';

export function CategoryTypeTabs(props: categoryTypeTypes) {
  const { categoryType, onCategoryTypeChange } = props;

  return (
    <Tabs
      variant="pills"
      value={categoryType}
      onChange={(activeTab) => onCategoryTypeChange(activeTab as CategoryType)}
      mt="sm"
    >
      <Tabs.List grow>
        <Tabs.Tab value={categoryTypes.expense}>Expenses</Tabs.Tab>
        <Tabs.Tab value={categoryTypes.income}>Income</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
