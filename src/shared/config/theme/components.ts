import { Text, Title } from '@mantine/core';
import styles from '@shared/styles/theme/typography.module.scss';

export const components = {
  Title: Title.extend({
    classNames: {
      root: styles.heading,
    },
  }),
  Text: Text.extend({
    classNames: {
      root: styles.text,
    },
  }),
};
