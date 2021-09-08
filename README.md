# winston-datadog-browser

Send winston logs to Datadog via the browser logs SDK.

## Installation

```sh
npm install --save winston winston-datadog-browser
```

## Usage

```ts
import { configure, format } from 'winston';
import { DatadogBrowserLogs } from 'winston-datadog-browser';

configure({
  transports: [
    new DatadogBrowserLogs({
      clientToken: '<DATADOG_CLIENT_TOKEN>',
      site: '<DATADOG_SITE>',
      forwardErrorsToLogs: true,
      sampleRate: 100,
    }),
    // Optionally log to browser as well
    new BrowserConsole({
      format: format.simple(),
    }),
  ],
});
```
