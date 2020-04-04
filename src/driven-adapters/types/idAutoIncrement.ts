import IGenerateValue from "./i-generate-value";

export default class idAutoIncrementGen implements IGenerateValue {
  private regExp = /^idAutoIncrement$/;
  private static count = 0;

  public generate(params: Array<any>): any {
    return ++idAutoIncrementGen.count;
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};