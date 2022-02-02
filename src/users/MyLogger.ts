import { ConsoleLogger, Logger } from '@nestjs/common';
import { LEVEL } from '../../config';

const loggerConsts = {
  log: 4,
  error: 1,
  debug: 3,
  warn: 2,
};

export class MyLogger extends ConsoleLogger {
  level: number;

  constructor(level: number) {
    super();
    this.level = level;
  }

  log(message) {
    if (this.level < loggerConsts.log) {
      return;
    }
    super.log(message);
  }

  warn(message) {
    if (this.level < loggerConsts.warn) {
      return;
    }
    super.warn(message);
  }

  debug(message) {
    if (this.level < loggerConsts.debug) {
      return;
    }
    super.debug(message);
  }

  error(message) {
    if (this.level < loggerConsts.error) {
      return;
    }
    super.error(message);
  }
}

export const logger = new MyLogger(+LEVEL);
