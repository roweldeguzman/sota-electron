// @flow
import React from 'react';
import { withConfig } from '../Contexts/ConfigContext';
import HeaderButton from './HeaderButton';
import classes from './Header.css';

type Props = {
  headerButtons: {
    left: [],
    right: []
  },
  config: any
};

const Header = ({ headerButtons, config }: Props) => {
  
  const theme = config.theme.header;

  const styles = {

    bar: {
      backgroundColor: theme.barColor
    },

    logoContainer: {
      width: theme.logoContainerWidth,
      backgroundColor: theme.logoContainerColor
    },

    logo: {
      width: theme.logoWidth,
      height: theme.logoHeight,
    }
  }

  return (
    
    <div className={classes.bar} style={styles.bar}>
    
      {(!!theme.logo) && (
        <div className={classes.logoContainer} style={styles.logoContainer}>
          <img src={theme.logo} style={styles.logo} />
        </div>
      )}

      <div className={classes.leftMenuItems}>

        {headerButtons.left.map((menuItem) => (
          
          <HeaderButton {...menuItem} />
          
        ))}

      </div>

      <div className={classes.rightMenuItems}>

        {headerButtons.right.map((menuItem) => (
          
          <HeaderButton {...menuItem} />
          
        ))}

      </div>

    </div>
  )
}

export default withConfig(Header);