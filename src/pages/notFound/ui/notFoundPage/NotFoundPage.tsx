import { Content, Header, MainLayout } from '@/shared/ui/layouts/mainLayout';
import { Center, Image, Title } from '@mantine/core';
import NotFoundIllustration from '@shared/assets/illustrations/undraw_page_not_found.svg';

export function NotFoundPage() {
  return (
    <MainLayout>
      <Header>
        <Center h="270">
          <Title mt="md" order={1}>
            Page Not Found
          </Title>
        </Center>
      </Header>
      <Content>
        <Center>
          <Image
            src={NotFoundIllustration}
            alt="Not Found Illustration"
            p={{ xs: '0px', sm: '20px', md: '100px' }}
          />
        </Center>
      </Content>
    </MainLayout>
  );
}
