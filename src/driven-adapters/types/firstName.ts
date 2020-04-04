import faker from 'faker';
import IGenerateValue from "./i-generate-value";

export default class FisrtNameGen implements IGenerateValue {
  public regExp = /^firstName$/;

  public generate (params: Array<any>): any {
    return faker.name.firstName();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
}
