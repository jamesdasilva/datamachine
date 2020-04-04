import faker from 'faker';

export default class JobGen {
  private regExp = /^job$/;
  public generate(params: Array<any>): any {
    return faker.name.title();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};
