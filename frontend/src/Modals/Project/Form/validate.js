export default (values) => {

  const errors = {};

  if (!values.name) errors.name = true;

  return errors;
  
}