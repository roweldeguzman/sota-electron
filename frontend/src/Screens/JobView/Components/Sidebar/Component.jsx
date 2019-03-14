/* eslint-disable react/jsx-one-expression-per-line, react/prop-types */

import * as React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Icon, Select } from 'antd';
import { NavLink } from 'react-router-dom';

import PricingForm from '../PricingForm';

import styles from './Component.css';

const Section = (props) => (
  <div className={styles.section} {...props}>
    {props.children}
  </div>
)

const Outlet = (props) => (
  <div className={styles.outlet} {...props}>
    {props.children}
  </div>
)

const OutletLabel = (props) => (
  <div className={styles.outletLabel} {...props}>
    {props.children}
  </div>
)

const OutletData = (props) => (
  <div className={styles.outletData} {...props}>
    {props.children}
  </div>
)


export default class extends React.PureComponent {

  static propTypes = {
    job: PropTypes.object.isRequired,
    editMode: PropTypes.object.isRequired,

    onClickEditPrice: PropTypes.func.isRequired,
    onClickEditStatus: PropTypes.func.isRequired,
    onBlurStatus: PropTypes.func.isRequired,
    onChangeStatus: PropTypes.func.isRequired
  }

  render () {

    const { Option } = Select;
    const {
      job,
      editMode,

      onClickEditPrice,
      onClickEditStatus,
      onBlurStatus,
      onChangeStatus
    } = this.props;

    return (

      <div className={styles.wrapper}>

        <div className={styles.innerWrapper}>

          <Section>

            <Outlet>

              <OutletLabel>Client</OutletLabel>
              <OutletData>
                <NavLink to={`/portal/clients/${job.client.id}/view`}>
                  {job.client.name}
                </NavLink>
              </OutletData>

            </Outlet>

            <Outlet>

              <OutletLabel>Project</OutletLabel>
              <OutletData>{ job.project.name }</OutletData>

            </Outlet>

          </Section>

          
          <Section>

            <Outlet>

              <OutletLabel>
                { 'Price' }
                { !editMode.pricing && (
                  <Icon type="edit" className={styles.actionIcon} onClick={onClickEditPrice} />
                )}

              </OutletLabel>

              { (!editMode.pricing && job.price_type) && (
                <React.Fragment>

                  { job.price_type === "Estimate" && (
                    <OutletData>
                      { `£ ${numeral(job.estimate_lower_amount).format('0,0.00')} - £ ${numeral(job.estimate_upper_amount).format('0,0.00')}` }
                    </OutletData>
                  )}

                  { job.price_type === "Quote" && (
                    <OutletData>
                      {`£ ${numeral(job.quote_amount).format('0,0.00')}`}
                    </OutletData>
                  )}

                  <span> { job.price_type || '--' } </span>

                </React.Fragment>
              )}

              { editMode.pricing && (
                <PricingForm record={job} />
              )}
            </Outlet>

          </Section>
          

          <Section>

            <Outlet>
              
              <OutletLabel>
                
                { 'Status' }
                { job.stage !== "Invoiced" && (
                  <Icon type="edit" theme="filled" className={styles.actionIcon} onClick={onClickEditStatus} />
                )}

              </OutletLabel>
              
              { !editMode.status && (
                <OutletData>{ job.stage }</OutletData>
              )}

              { editMode.status && (
              
                <Select
                  style={{ width: '100%'}}
                  onBlur={onBlurStatus}
                  onChange={onChangeStatus}
                  defaultOpen
                  autoFocus
                >
                  <Option value="APPROVED" disabled={!job.price_type || job.stage === "Approved" || job.stage === "Completed" || job.stage === "Invoiced" || job.stage === "Aborted"}> Mark as Approved </Option>
                  <Option value="COMPLETED" disabled={!job.price_type || job.stage === "Completed" || job.stage === "Invoiced" || job.stage === "Aborted"}> Mark as Completed </Option>
                  <Option value="INVOICED" disabled={!job.price_type || job.stage === "Invoiced" || job.stage === "Aborted"}> Mark as Invoiced </Option>

                  <Option value="ABORT" disabled={job.stage === "Aborted" || job.stage === "Completed" || job.stage === "Invoiced"}> Abort Job </Option>
                  <Option value="DELETE" disabled={job.stage !== "Requested" && job.stage !== "Aborted"}> Delete Job </Option>
                </Select>

              )}

            </Outlet>

          </Section>
        </div>

      </div>

    )
  }
}