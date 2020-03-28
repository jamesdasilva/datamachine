import logSymbols = require('log-symbols');
import IWriteLog from '../../boundary/driven-port/i-write-log';

export default class Log implements IWriteLog {
  putInfo(text: string) {
    console.log(logSymbols.info, `${text}`);
  }
  putSuccess(text: string) {
    console.log(logSymbols.success, `${text}`);
  }
  putWarning(text: string) {
    console.log(logSymbols.warning, `${text}`);
  }
  putErro(text: string) {
    console.log(logSymbols.error, `${text}`);
  }
}
