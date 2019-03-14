// @flow
import * as React from 'react';
import styles from './Wrapper.css';

type Props = {
  children: React.Node,
};

export default ({ children }: Props) => (
  <div className={styles.wrapper}>
    {children}
  </div>
)