// @flow
import * as React from 'react';
import Wrapper from './Components/Wrapper';
import BrandingPanel from './Components/BrandingPanel';
import FormPanel from './Components/FormPanel';
import Form from './Components/Form';
import VersionInfo from './Components/VersionInfo';

type Props = {
  config: any,
  submit: () => void,
  submitting: bool,
  error: any
};

export default ({ config, submitting, submit, error }: Props) => {

  return (

    <Wrapper>

      <BrandingPanel theme={config.theme.login} />

      <FormPanel theme={config.theme.login}>

        <Form
          theme={config.theme.login}
          usernameIsEmail={config.login.usernameIsEmail}
          usernamePlaceholder={config.login.usernamePlaceholder}
          submit={submit}
          submitting={submitting}
          error={error}
        />

        <VersionInfo />

      </FormPanel>

    </Wrapper>

  )
}
