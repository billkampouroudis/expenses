import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { Button, Paper } from '@mantine/core';
import SimpleLayout from '../../components/layouts/SimpleLayout/SimpleLayout';

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <SimpleLayout>
      <Paper shadow="sm" p={{ base: 'md', md: 'lg' }}>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>
        <div className="card">
          <Button variant="filled" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </Paper>
    </SimpleLayout>
  );
}

export default HomePage;