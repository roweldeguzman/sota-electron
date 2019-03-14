export default (values) => {
  
  const errors = {};

  if (!values.title) errors.title = true;
  
  return errors;
  
}
