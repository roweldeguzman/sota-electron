export default (values) => {

  const errors = {};

  if (!values.client_id) errors.client_id = true;
  if (!values.project_id) errors.project_id = true;  
  if (!values.title) errors.title = true;

  if (values.price_type && values.price_type === "Estimate") {
    if (!values.estimate_lower_amount) errors.estimate_lower_amount = true;
    if (!values.estimate_upper_amount) errors.estimate_upper_amount = true;
  }

  if (values.price_type && values.price_type === "Quote" && !values.quote_amount) errors.quote_amount = true; 

  return errors;
  
}