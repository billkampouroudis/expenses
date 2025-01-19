export const expenseCategoryTitles = {
  housing: 'housing',
  groceries: 'groceries',
  transportation: 'transportation',
  healthcare: 'healthcare',
  debts: 'debts',
  other: 'other',
} as const;

export const incomeCategoryTitles = {
  paycheck: 'paycheck',
  gift: 'gift',
  other: 'other',
} as const;

export const categoryTitles = {
  ...expenseCategoryTitles,
  ...incomeCategoryTitles,
} as const;

export const categoryTypes = {
  expense: 'expense',
  income: 'income',
} as const;
