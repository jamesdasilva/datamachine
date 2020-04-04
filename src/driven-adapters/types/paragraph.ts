import faker from 'faker';

export default class ParagraphGen {
  private regExp = /^paragraph$/;
  
  public generate(params: Array<any>): any {
    return faker.lorem.paragraph();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};

