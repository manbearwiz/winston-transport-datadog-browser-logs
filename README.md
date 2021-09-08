# winston-datadog-browser

Send winston logs from the browser to Datadog via the [datadog browser logs SDK](https://github.com/DataDog/browser-sdk/tree/main/packages/logs#browser-log-collection).

`winston-transport` + `@datadog/browser-logs`

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
    // Optionally, also log to browser console
    new BrowserConsole({
      format: format.simple(),
    }),
  ],
});
```

## Configuration

`DatadogBrowserLogs` uses the same configuration interface as `@datadog/browser-logs`. See the [datadog initialization parameters](https://github.com/DataDog/browser-sdk/tree/main/packages/logs#initialization-parameters) for more details.
