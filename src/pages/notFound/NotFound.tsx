import { Center, Container, Image, Title } from '@mantine/core';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import NotFoundIllustration from '@/assets/illustrations/undraw_page_not_found.svg';

function NotFound() {
  return (
    <MainLayout>
      <Container mt="md" size="sm">
        <Center>
          <Image src={NotFoundIllustration} alt="Not Found Illustration" w={'100%'} />
        </Center>
        <Center>
          <Title mt="md" order={1}>
            Page Not Found
          </Title>
        </Center>
      </Container>
    </MainLayout>
  );
}

export default NotFound;
