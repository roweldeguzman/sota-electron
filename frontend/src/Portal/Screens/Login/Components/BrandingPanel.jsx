// @flow
import * as React from 'react';
import classes from './BrandingPanel.css';

type Props = {
  theme: any
};

export default ({ theme }: Props) => (
  
  <div
    className={classes.panel}
    style={{ backgroundColor: theme.brandingPanelColor}}
  >
    {(!!theme.brandingPanelLogo) && (
      <img src={theme.brandingPanelLogo} style={classes.logo} />
    )}
  </div>

);

