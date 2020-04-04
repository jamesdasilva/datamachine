import faker from 'faker';

export default class LatitudeGen {
  private regExp = /^text$/;
  
  public generate(params: Array<any>): any {
    return faker.lorem.text();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
}
