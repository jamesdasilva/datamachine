import logSymbols = require('log-symbols');
import ILog from '../library/i-log';

export default class Log implements ILog {
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
