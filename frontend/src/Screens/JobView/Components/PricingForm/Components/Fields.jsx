import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider } from 'antd';
import { Field } from 'redux-form';
import { SelectField, InputNumberField } from 'redux-form-antd-fields';

const wrapperColSpan = 24;

export default class extends React.PureComponent{

  static propTypes = {
    record: PropTypes.object.isRequired,
    priceType: PropTypes.string.isRequired,
    submitting: PropTypes.bool,

    onClickSave: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired,
    onClickClearPrice: PropTypes.func.isRequired
  }

  static defaultProps = {
    submitting: false
  }

  render () {

    const {
      record,
      priceType,
      submitting,
      onClickSave,
      onClickCancel,
      onClickClearPrice
    } = this.props;

    const priceTypeOption = [
      { label: "Estimate", value: "Estimate"},
      { label: "Quote", value: "Quote"},
    ]
    
    const formatter = (value) => {
      const values = value ? value.toString().replace(/[^0-9.]/g, "") : '';
      
      return `£ ${values}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      
    }

    return (
      
      <div>

        <Field
          name="price_type"
          label=""
          disabled={submitting}
          component={SelectField}
          options={priceTypeOption}
          wrapperCol={{ span: wrapperColSpan }}
          required
        />

        { priceType === "Estimate" && (
          <React.Fragment>
            <Field
              name="estimate_lower_amount"
              placeholder="Lower"
              disabled={submitting}
              component={InputNumberField}
              wrapperCol={{ span: wrapperColSpan }}
              formatter={formatter}
              required
            />

            <Field
              name="estimate_upper_amount"
              placeholder="Upper"
              disabled={submitting}
              component={InputNumberField}
              wrapperCol={{ span: wrapperColSpan }}
              formatter={formatter}
              required
            />
          </React.Fragment>
        )}

        { priceType === "Quote" && (
          <Field
            name="quote_amount"
            disabled={submitting}
            component={InputNumberField}
            wrapperCol={{ span: wrapperColSpan }}
            formatter={formatter}
            required
          />
        )}
        
        <Divider type="horizontal" style={{ marginBottom: 10 }} />

        <div style={{ display: 'flex'}}>

          <div style={{ flex: 1}}>
            { record.price_type && (
              <Button type="danger" size="small" onClick={onClickClearPrice}>
                Clear
              </Button>
            )}

          </div>
            
          <Button size="small" onClick={onClickCancel} disabled={submitting}>
            Cancel
          </Button>

          <Button style={{ marginLeft: 10 }} type="primary" size="small" onClick={onClickSave} loading={submitting}>
            Save
          </Button>

        </div>

      </div>

    )
  }
}