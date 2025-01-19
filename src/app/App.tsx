import { MantineProvider } from '@mantine/core';
import { theme } from '../shared/config/theme';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from '../pages/home';
import { NotFoundPage } from '../pages/notFound';
import { Notifications } from '@mantine/notifications';

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
