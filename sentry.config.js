import * as Sentry from '@sentry/browser';

Sentry.init({

  dsn: 'https://68d17edf2f46aab26941ac00fa84c3b8@o4508369480122368.ingest.de.sentry.io/4508369512497232',

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0,
});