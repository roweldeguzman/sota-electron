// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { withConfig } from '../Contexts/ConfigContext';
import classes from './HeaderButton.css';

type Props = {
  title: ?string,
  icon?: React.Node,
  iconSize?: number,
  href: ?string,
  selected: ?boolean,
  config: any
};

type State = {
  hovered: boolean,
  active: boolean
};

class HeaderButton extends React.Component<Props, State> {

  static defaultProps = {
    icon: null,
    iconSize: 15
  }

  state = {
    hovered: false,
    active: false
  }

  render () {
  
    const { title, icon, iconSize, href, selected, config } = this.props;

    const { hovered, active } = this.state;

    const theme = config.theme.headerButtons;

    const buttonColor = 
      (selected && theme.buttonColorSelected) ||
      (active && theme.buttonColorActive) ||
      (hovered && theme.buttonColorHovered) ||
      theme.buttonColor;
  
    const textColor = 
      (selected && theme.textColorSelected) ||
      (active && theme.textColorActive) ||
      (hovered && theme.textColorHovered) ||
      theme.textColor;
  
    const iconColor = 
      (selected && theme.iconColorSelected) ||
      (active && theme.iconColorActive) ||
      (hovered && theme.iconColorHovered) ||
      theme.iconColor;

    const styles = {

      button: {
        backgroundColor: buttonColor,
      },

      text: {
        color: textColor,
      },

      icon: {
        color: iconColor,
      }
    }

    return (
    
      <Link
        to={href}
        className={classes.button}
        style={styles.button}
        onMouseEnter={() => {this.setState({ hovered: true, active: false })}}
        onMouseLeave={() => {this.setState({ hovered: false, active: false })}}
        onMouseDown={() => {this.setState({ active: true })}}
        onMouseUp={() => {this.setState({ active: false })}}
      >

        {(!!icon) && (
          <Icon
            icon={icon}
            size={iconSize}
            style={styles.icon}
          />
        )}

        {(!icon && title) && (
          <div
            className={classes.text}
            style={styles.text}
          >
            {title}
          </div>
        )}

      </Link>
    )
  }
}

export default withConfig(HeaderButton);