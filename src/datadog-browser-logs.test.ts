/* eslint-disable @typescript-eslint/unbound-method */
import { datadogLogs } from '@datadog/browser-logs';
import { expect, test, vi, describe, beforeEach } from 'vitest';
import winston from 'winston';

import { DatadogBrowserLogs } from './datadog-browser-logs';

vi.mock('@datadog/browser-logs', () => ({
  datadogLogs: {
    init: vi.fn(),
    logger: {
      log: vi.fn(),
    },
  },
}));

describe('DatadogBrowserLogs', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('should be defined', () => {
    expect(DatadogBrowserLogs).toBeDefined();
  });

  test('should be a constructor', () => {
    expect(DatadogBrowserLogs).toBeInstanceOf(Function);
  });

  describe('log', () => {
    let logger: winston.Logger;

    beforeEach(() => {
      vi.resetAllMocks();

      logger = winston.createLogger({
        transports: [
          new DatadogBrowserLogs({ clientToken: 'token', site: 'site' }),
        ],
      });
    });

    test('should call datadogLogs.logger.log with info level', () => {
      logger.info('Hello, world');

      expect(datadogLogs.logger.log).toHaveBeenCalledWith(
        'Hello, world',
        {},
        'info',
      );
    });

    test('should call datadogLogs.logger.log with warn level', () => {
      logger.warn('Something might be wrong');

      expect(datadogLogs.logger.log).toHaveBeenCalledWith(
        'Something might be wrong',
        {},
        'warn',
      );
    });

    test('should call datadogLogs.logger.log with error level', () => {
      logger.error('Something went wrong');

      expect(datadogLogs.logger.log).toHaveBeenCalledWith(
        'Something went wrong',
        {},
        'error',
      );
    });
  });
});
