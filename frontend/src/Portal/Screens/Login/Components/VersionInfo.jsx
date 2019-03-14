// @flow
import * as React from 'react';
import classes from './VersionInfo.css';

export default () => {

  let info;

  if (window.env.RELEASE) {
    info = `Release: ${window.env.RELEASE}`;
  } else if (window.env.BUILD) {
    info = `Build: ${window.env.BUILD}`;
  } else {
    info = `Local Development`;
  }

  return (
    <div className={classes.footer}>
      <div className={classes.tag}>
        {info}
      </div>
    </div>
  )
}

