export default class Log {
  constructor() {}
  putInfo(text: string) {
    console.log(`- [Info] ${text}`);
  }
  putErro(text: string) {
    console.log(`- [Erro] ${text}`);
  }
}