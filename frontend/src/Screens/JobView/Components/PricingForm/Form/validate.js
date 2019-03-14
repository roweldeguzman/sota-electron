export default (values) => {
  
  const errors = {};

  if (!values.price_type) errors.price_type = true;
  
  if (values.price_type === "Estimate") {
    if (!values.estimate_lower_amount) errors.estimate_lower_amount = true;
    if (!values.estimate_upper_amount) errors.estimate_upper_amount = true;
    if (values.estimate_lower_amount && values.estimate_lower_amount.toString().replace(/[^0-9.]/g, "") === "") errors.estimate_lower_amount = true;
    if (values.estimate_upper_amount && values.estimate_upper_amount.toString().replace(/[^0-9.]/g, "") === "") errors.estimate_upper_amount = true;
  } 

  if (values.price_type === "Quote") {
    if (!values.quote_amount) errors.quote_amount = true;
    if (values.quote_amount && values.quote_amount.toString().replace(/[^0-9.]/g, "") === "") errors.quote_amount = true;
  }

  return errors;
  
}
