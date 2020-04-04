import faker from 'faker';

export default class NameGen {
  private regExp = /^name$/;
  
  public generate(params: Array<any>): any {
    return faker.name.findName();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};
