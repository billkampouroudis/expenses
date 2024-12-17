import { Tabs } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router';
import styles from './mainMenu.module.scss';

function MainMenu() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location from react-router
  const currentPath = location.pathname; // Extract the current URL path
  const activeTabValue = `/${currentPath.split('/')[1]}`;

  return (
    <Tabs
      value={activeTabValue}
      onChange={(value) => navigate(value || '/')}
      className={styles.mainMenu}
    >
      <Tabs.List grow justify="center">
        <Tabs.Tab value="/">First tab</Tabs.Tab>
        <Tabs.Tab value="/second">Second tab</Tabs.Tab>
        <Tabs.Tab value="/third">Second tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default MainMenu;
