import faker from 'faker';

export default class EmailGen {
  private regExp = /^email$/;
  public generate(params: Array<any>): any{
    return faker.internet.email().toLocaleLowerCase();
  }
  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
}
