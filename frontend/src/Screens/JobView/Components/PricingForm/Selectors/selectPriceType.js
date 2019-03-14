import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form';

import { FORM_NAME } from '../Form';

const selectValues = state => getFormValues(FORM_NAME)(state);

export default createSelector(
  selectValues,
  (values) => values && values.price_type ? values.price_type : ""
)