import faker from 'faker';

export default class LastNameGen {
  private regExp = /^lastName$/;
  
  public generate(params: Array<any>): any {
    return faker.name.lastName();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};
