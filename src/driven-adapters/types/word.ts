import faker from 'faker';

export default class LatitudeGen {
  private regExp = /^word$/;
  
  public generate(params: Array<any>): any {
    return faker.lorem.word();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
}

