# winston-datadog-browser

[![npm](https://img.shields.io/npm/v/winston-datadog-browser?style=flat-square)](https://www.npmjs.com/package/winston-datadog-browser?activeTab=versions)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/winston-datadog-browser?style=flat-square)](https://bundlephobia.com/package/winston-datadog-browser)
[![NPM](https://img.shields.io/npm/l/winston-datadog-browser?style=flat-square)](https://raw.githubusercontent.com/manbearwiz/winston-datadog-browser/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/winston-datadog-browser?style=flat-square)](https://www.npmjs.com/package/winston-datadog-browser)
[![GitHub issues](https://img.shields.io/github/issues/manbearwiz/winston-datadog-browser?style=flat-square)](https://github.com/manbearwiz/winston-datadog-browser/issues)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release&style=flat-square)](https://github.com/semantic-release/semantic-release)

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
