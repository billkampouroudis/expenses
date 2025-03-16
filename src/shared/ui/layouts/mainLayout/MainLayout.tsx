import { MainLayoutProps } from './mainlayout.types';
import { Card, Container } from '@mantine/core';
import styles from './mainLayout.module.scss';

export function Header(props: MainLayoutProps) {
  const { children } = props;

  return (
    <Card radius="none" className={styles.header}>
      {children}
    </Card>
  );
}

export function Content({ children }: any) {
  return <Card className={styles.content}>{children}</Card>;
}

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <Container size="sm" className={styles.mainContainer}>
      {children}
    </Container>
  );
}
