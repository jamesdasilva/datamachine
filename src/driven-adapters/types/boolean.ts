import IGenerateValue from "./i-generate-value";
import faker from "faker";

export default class BooleanGen implements IGenerateValue {
  public regExp: RegExp = /^boolean$/;
  public generate() {
    return faker.random.boolean();
  }
  public test(stringType: string) {
    return this.regExp.test(stringType);
  }
};
