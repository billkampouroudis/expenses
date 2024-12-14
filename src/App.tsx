import { MantineProvider } from '@mantine/core';
import HomePage from './pages/home';
import theme from './theme';

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <HomePage />
    </MantineProvider>
  );
}

export default App;
