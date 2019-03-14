/* eslint-disable global-require, import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { AppContainer } from 'react-hot-loader';
import Portal from './src/Portal';
import Routes from './src/Routes';
import * as config from './src/Config';

import 'evolve-portal/lib/styles.css';
import 'antd/dist/antd.css';
import 'draft-js/dist/Draft.css';
import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';

import './global.css';

window.$ = $;

ReactDOM.render(
  <AppContainer>
    <Portal config={config} env={window.env}>
      <Routes />
    </Portal>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./src/Portal', () => {
    const NextApp = require('./src/Portal').default; 
    ReactDOM.render(
      <AppContainer>
        <NextApp config={config} env={window.env}>
          <Routes />
        </NextApp>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

