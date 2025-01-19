import { Flex, Skeleton } from '@mantine/core';

export function MonthAndTypeSelectorSkeleton() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Flex gap="md" align="center">
        <Skeleton height={26} width={26} />
        <div>
          <Skeleton height={20} width={120} />
          <Skeleton height={32} width={120} mt="sm" />
        </div>
        <Skeleton height={26} width={26} />
      </Flex>
      <Flex gap="md" align="center" mt="md">
        <Skeleton height={30} width="50%" />
        <Skeleton height={30} width="50%" />
      </Flex>
    </div>
  );
}
