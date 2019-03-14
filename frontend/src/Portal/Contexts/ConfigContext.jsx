import React from 'react';

const Context = React.createContext();


export const withConfig = (Component) => (props) => (
  <Context.Consumer>
    {config => <Component {...props} config={config} />}
  </Context.Consumer>
);

export default Context;