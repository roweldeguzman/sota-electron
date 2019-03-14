// @flow
import * as React from 'react';
import Wrapper from './Components/Wrapper';

type Props = {
  config: any
};

export default ({ config }: Props) => {

  const { loadingIndicator } = config.theme.startup; 

  return (

    <Wrapper>

      {!!loadingIndicator && <img src={loadingIndicator} />}

    </Wrapper>

  )
}
