import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Button, Divider } from 'antd';
import { Field } from 'redux-form';
import { SelectField, InputField, InputNumberField } from 'redux-form-antd-fields';

import FroalaEditor from './Components/Froala';

const labelColSpan = 2;
const wrapperColSpan = 6;

export default class extends React.PureComponent{

  static propTypes = {
    priceType: PropTypes.string.isRequired,
    clients: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    submitting: PropTypes.bool.isRequired,
    
    onChangeClient: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired
  }

  render () {

    const {
      priceType,
      clients,
      projects,
      submitting,
      onChangeClient,
      onClickSave,
      onClickCancel
    } = this.props;

    const clientOptions = clients.map(client => ({ label: client.name, value: client.id }));
    const projectOptions = projects.map(project => ({ label: project.name, value: project.id }));
    const priceTypeOption = [
      { label: "Estimate", value: "Estimate"},
      { label: "Quote", value: "Quote"},
    ];

    const formatter = (value) => {
      const values = value ? value.toString().replace(/[^0-9.]/g, "") : '';
      
      return `£ ${values}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      
    }

    return (
      
      <Card>

        <Row>

          <Col span={24}>

            <Field
              name="client_id"
              label="Client"
              disabled={submitting}
              component={SelectField}
              options={clientOptions}
              onChange={onChangeClient}
              labelCol={{ span: labelColSpan }}
              wrapperCol={{ span: wrapperColSpan }}
              required
            />

            <Field
              name="project_id"
              label="Project"
              disabled={submitting}
              component={SelectField}
              options={projectOptions}
              labelCol={{ span: labelColSpan }}
              wrapperCol={{ span: wrapperColSpan }}
              required
            />
            
            <Field
              name="title"
              label="Title"
              disabled={submitting}
              component={InputField}
              labelCol={{ span: labelColSpan }}
              wrapperCol={{ span: wrapperColSpan }}
              required
            />

            <Field
              name="price_type"
              label="Price Type"              
              disabled={submitting}
              component={SelectField}
              options={priceTypeOption}
              labelCol={{ span: labelColSpan }}
              wrapperCol={{ span: wrapperColSpan }}
            />

            { priceType === "Estimate" && (
              <React.Fragment>
                <Field
                  name="estimate_lower_amount"
                  label="Lower"
                  disabled={submitting}
                  component={InputNumberField}
                  labelCol={{ span: labelColSpan }}
                  wrapperCol={{ span: wrapperColSpan }}
                  formatter={formatter}
                  required
                />

                <Field
                  name="estimate_upper_amount"
                  label="Upper"
                  disabled={submitting}
                  component={InputNumberField}
                  labelCol={{ span: labelColSpan }}
                  wrapperCol={{ span: wrapperColSpan }}
                  formatter={formatter}
                  required
                />
              </React.Fragment>
            )}

            { priceType === "Quote" && (
              <Field
                name="quote_amount"
                label="Amount"
                disabled={submitting}
                component={InputNumberField}
                labelCol={{ span: labelColSpan }}
                wrapperCol={{ span: wrapperColSpan }}
                formatter={formatter}
                required
              />
            )}
            <Divider type="horizontal" />

            <h4>
              Content
            </h4>
            <Field
              name="content"
              label="Content"
              disabled={submitting}
              component={FroalaEditor}
              labelCol={{ span: labelColSpan }}
              wrapperCol={{ span: wrapperColSpan }}
              style={{ height: 140 }}
              required
            />

          </Col>
          
          <Col span={5} offset={1}>

            <Button type="default" className="m-r-10" onClick={onClickCancel}>
              Cancel
            </Button>
            
            <Button type="primary" onClick={onClickSave} loading={submitting} style={{ marginLeft: 15}}>
              Create
            </Button>

          </Col>

        </Row>

      </Card>

    )
  }
}