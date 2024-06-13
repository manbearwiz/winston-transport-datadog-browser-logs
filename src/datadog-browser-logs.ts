import {
  type LogsInitConfiguration,
  type StatusType,
  datadogLogs,
} from '@datadog/browser-logs';
import type { LogEntry } from 'winston';
import type { TransportStreamOptions } from 'winston-transport';
import TransportStream = require('winston-transport');

export class DatadogBrowserLogs extends TransportStream {
  static readonly statusTypes: Record<string, StatusType> = {
    debug: 'debug',
    error: 'error',
    info: 'info',
    warn: 'warn',
  };

  constructor(
    datadogConfig: LogsInitConfiguration,
    options?: TransportStreamOptions,
    private statusTypeMap = DatadogBrowserLogs.statusTypes,
  ) {
    super(options);

    datadogLogs.init(datadogConfig);
  }

  override log(info: LogEntry, callback: () => void): void {
    setImmediate(() => {
      this.emit('logged', info);
    });

    const { message, level } = info;
    const status = this.statusTypeMap[level];

    datadogLogs.logger.log(message, {}, status);

    callback();
  }
}
