import { Tabs } from '@mantine/core';
import { useNavigate, useParams } from 'react-router';
import { MainMenuProps } from './mainLayout.types';

function MainMenu(props: MainMenuProps) {
  const { className } = props;

  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs value={tabValue} onChange={(value) => navigate(value || '/')} className={className}>
      <Tabs.List grow justify="center">
        <Tabs.Tab value="/">First tab</Tabs.Tab>
        <Tabs.Tab value="/second">Second tab</Tabs.Tab>
        <Tabs.Tab value="/third">Second tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default MainMenu;
