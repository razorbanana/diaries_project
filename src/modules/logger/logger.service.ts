import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends ConsoleLogger{
    log(message: any, context?: string) {
        const modifiedMessage = `uwu ${JSON.stringify(message, null, 2)}`;

        super.log(modifiedMessage, context);
      }

    error(message: any, stack?: string, context?: string) {
        const modifiedMessage = `not uwu :( ${message}`;

        super.error(modifiedMessage, stack, context);
      }

}
