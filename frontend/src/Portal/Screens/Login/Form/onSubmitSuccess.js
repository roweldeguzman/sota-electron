export default (result, dispatch, props) => {
  const { config } = props;
  dispatch(config.login.onSuccess());
}
