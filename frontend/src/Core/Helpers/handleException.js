// @flow

import React from 'react';
import Raven from 'raven-js';
import { get } from 'lodash';
import { Modal } from 'antd';
import isHttpError from './isHttpError';

export default (error: any) => {
    
  if (isHttpError(error) && error.response.status === 409) {

    const { title, messages } = error.response.data.error;

    Modal.warning({
      title,
      content: (

        <div>

          {messages.length === 1 && (
            <div>
              {messages[0]}
            </div>
          )}

          {messages.length > 1 && messages.map(message => (
            <div>
              {`• ${message}`}
            </div>
          ))}

        </div>
      )
    });

  } else if (isHttpError(error) && error.response.status === 404) {
    
    Modal.error({
      title: 'Oops! There was a problem behind the scenes',
      content: 'Please contact support if this problem persists.',
      width: 500
    });
    
  } else if (isHttpError(error) && error.response.status === 500) {

    Modal.error({
      title: 'Oops! There was a problem behind the scenes',
      content: 'Please contact support if this problem persists.',
      width: 500
    });
    
  } else {

    if (get(window, '__ENV__.APP_ENV') === 'local') {

      throw error;

    }
      
    Raven.captureException(error)

    Modal.confirm({
      title: "Oops! Something didn`t go quite right...",
      content: (
        <div>
          If you have a moment, it would be great if you could explain what you were trying to do.
          It might just help us fix the problem quicker :)
        </div>
      ),
      width: 500,
      iconType: 'warning',
      cancelText: "Dismiss",
      okText: "Submit Report",
      onOk: () => Raven.showReportDialog()
    });
    
  }
  
}