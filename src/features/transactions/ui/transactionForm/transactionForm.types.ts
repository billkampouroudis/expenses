import { categoryTitles } from '@/entities/category';
// import { Transaction } from '@/entities/transaction';
import { z } from 'zod';

export const schema = z.object({
  categoryTitle: z.enum(Object.keys(categoryTitles) as [keyof typeof categoryTitles], {
    message: 'This field is required',
  }),
  amount: z.number(),
  date: z.date(),
  description: z.string().optional(),
});

export type FormValues = Partial<z.infer<typeof schema>>;

export type TransactionFormProps = {
  onSuccess?: () => void;
  onError?: (_error: Error) => void;
};
