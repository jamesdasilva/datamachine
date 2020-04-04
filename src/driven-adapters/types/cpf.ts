import Chance from 'chance';
import IGenerateValue from './i-generate-value';

export default class CpfGen implements IGenerateValue {
  public generate(params = []): any {
      return new Chance().cpf();
  }
  public test(stringType: string): boolean {
    return true;
  }
}
