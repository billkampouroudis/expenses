import { MainLayoutProps } from './mainlayout.types.ts';
import MainMenu from '../../navigation/mainMenu/MainMenu';
import { Paper } from '@mantine/core';
import styles from './mainLayout.module.scss';

function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <Paper className={styles.mainLayoutWrapper}>
      {children}
      <MainMenu className={styles.mainMenu} />
    </Paper>
  );
}

export default MainLayout;
