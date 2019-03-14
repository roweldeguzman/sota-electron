/* eslint-disable no-underscore-dangle */

let _props;

export const setProps = (props) => {
  _props = props;
}

export const getProps = () => _props;

export default { setProps, getProps }