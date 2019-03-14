// @flow
import * as React from 'react';
import classes from './Wrapper.css';

type Props = {
  children: React.Node,
};

export default ({ children }: Props) => (
  <div className={classes.wrapper}>
    {children}
  </div>
)