import raven from 'raven-js';

export default () => () => {

  const { APP_ENV, RELEASE, BUILD } = window.env;

  if (APP_ENV !== 'local') {

    raven.config('https://db049e3cc8eb40bfb60a9a096d560ad9@sentry.io/1263110', {
      release: RELEASE,
      environment: APP_ENV,
      tags: { build: BUILD }
    }).install();

  }

}