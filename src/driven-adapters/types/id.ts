import IGenerateValue from "./i-generate-value";

export default class IdGen implements IGenerateValue {
  private regExp = /^id$/;
  public generate(params: Array<any>) {
      var prefixo = '-dm';
      var token = this.generateString(6);
      var timestamp = new Date().getTime();
      return prefixo + timestamp + token;
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }

  private generateString(tamanho) {
    let letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    let aleatorio = '';
    for (let i = 0; i < tamanho; i++) {
      let rnum = Math.floor(Math.random() * letras.length);
      aleatorio += letras.substring(rnum, rnum + 1);
    }
    return aleatorio;
  }
  
};
