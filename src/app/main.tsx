import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';
import '@shared/styles/main.scss';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';

// @ts-ignore
import '@fontsource/noto-sans';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
