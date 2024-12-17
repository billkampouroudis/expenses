import { Tabs } from '@mantine/core';
import { useNavigate, useParams } from 'react-router';
import styles from './mainMenu.module.scss';

function MainMenu() {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs value={tabValue} onChange={(value) => navigate(value || '/')} className={styles.mainMenu}>
      <Tabs.List grow justify="center">
        <Tabs.Tab value="/">First tab</Tabs.Tab>
        <Tabs.Tab value="/second">Second tab</Tabs.Tab>
        <Tabs.Tab value="/third">Second tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default MainMenu;
