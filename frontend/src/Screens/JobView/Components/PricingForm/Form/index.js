import validate from './validate';
import onSubmit from './onSubmit';
import onSubmitFail from './onSubmitFail';

export const FORM_NAME = 'PriceForm';

export const formConfig = {
  form: FORM_NAME,
  validate,
  onSubmit,
  onSubmitFail
}