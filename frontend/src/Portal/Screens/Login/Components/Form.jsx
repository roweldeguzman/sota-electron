// @flow
import React from 'react';
import { Field } from 'redux-form';
import classes from './Form.css';

type Props = {
  theme: any,
  usernameIsEmail: boolean,
  usernamePlaceholder: string,
  submit: () => void,
  submitting: bool,
  error: ?any
};

export default ({ theme, usernameIsEmail, usernamePlaceholder, submit, submitting, error }: Props) => {

  // overide styles from the theme config

  const styles = {
    
    heading: {
      color: theme.headingColor
    },

    subheading: {
      color: theme.subheadingColor
    },

    label: {
      color: theme.labelTextColor
    },

    input: {
      color: theme.inputTextColor,
      borderColor: theme.inputBorderColor
    },

    submitButton: {
      backgroundColor: theme.submitButtonColor,
      color: theme.submitButtonTextColor
    }

  }
  
  return (
  
    <div className={classes.loginForm}>

      <div
        className={classes.heading}
        style={styles.heading}
      >
        
        {'Sign in to the Portal.'}

        <div
          className={classes.subheading}
          style={styles.subheading}
        >
          {'Enter your details below.'}
        </div>

      </div>
      
      {error && (
        <div className={classes.invalid}>
          {error}
        </div>
      )}

      <div>
        
        <label
          htmlFor="username"
          className={classes.label}
          style={styles.label}
        >
          {usernameIsEmail ? 'Email Address' : 'Username'}
        </label>

        <Field
          id="username"
          name="username"
          component="input"
          className={classes.usernameField}
          style={styles.input}
          placeholder={usernamePlaceholder}
          autoComplete="off"
          disabled={submitting}
          onKeyPress={e => e.which === 13 && submit()}
        />

      </div>

      <div>

        <label
          htmlFor="password"
          className={classes.label}
          style={{ color: theme.labelTextColor }}
        >
          {'Password'}
        </label>
      
        <Field
          id="password"
          name="password"
          component="input"
          type="password"
          className={classes.passwordField}
          style={styles.input}
          placeholder="Enter your password"
          disabled={submitting}
          onKeyPress={e => e.which === 13 && submit()}
        />

      </div>
      
      <button
        className={classes.submitButton}
        style={styles.submitButton}
        onClick={submit}
        type="submit"
        disabled={submitting}
      >
        {submitting ? 'Authenticating' : 'Sign In'}
      </button>
      
    </div>
      
  )

}
    
