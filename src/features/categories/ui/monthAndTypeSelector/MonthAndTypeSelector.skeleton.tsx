import { Skeleton } from '@mantine/core';

export function MonthAndTypeSelectorSkeleton() {
  return (
    <div style={{ width: '200px' }}>
      <Skeleton height={20} width={120} mx="auto" mb="sm" />
      <Skeleton height={32} width={120} mx="auto" />
    </div>
  );
}
