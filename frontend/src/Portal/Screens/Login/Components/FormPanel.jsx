// @flow
import * as React from 'react';
import styles from './FormPanel.css';

type Props = {
  children: React.Node,
  theme: any
};

export default ({ children, theme }: Props) => (

  <div
    className={styles.panel}
    style={{ backgroundColor: theme.formPanelColor}}
  >
    {children}
  </div>

);