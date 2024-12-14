import { Container } from '@mantine/core';
import { MainLayoutProps } from './simpleLayoutProps';

function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <Container size="sm" mt={{ base: '0', sm: 'lg' }} p="0">
      {children}
    </Container>
  );
}

export default MainLayout;
