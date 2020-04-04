var RandExp = require('randexp');

export default class RegExpGen {
  public generate(params): string {
    return new RandExp(new RegExp(params[0].slice(1, params[0].length - 1))).gen();
  }
  public test(): boolean {
    return true;
  }
}