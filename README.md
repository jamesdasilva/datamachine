# data-machine

Esta máquina fabrica dados falsos para preencher programas JavaScript. A estrutura dos dados é definida em objetos ___data molds___.

### Installation

Dentro do diretório raiz do projeto, execute o comando pelo terminal:
```
sudo npm -g install .
```
O programa será instalado globalmente e poderá ser utilizado em qualquer diretório através do comando ___data-machine___.

### Getting started
Para gerar dados com o _data-machine_, deve-se antes de qualquer coisa, criar o _data mold_, como por exemplo:
```
var dataMolds = [];
dataMolds.push({
  name: 'text:1',
  email: 'email',
  birthday: 'date:1980;2000',
  location:{
    lat: 'decimal:3;10;100', 
    lng: 'decimal:3;10;100'
  }
},{
  name: 'text:1',
  email: 'email',
  birthday: 'date:1980;2000'
});

module.exports = dataMolds;
```
Como se pode ver, trata-se de um vetor com objetos em que os valores são _strings que determinarão os valores dos objetos que serão criados pela data-machine_. Este código deve ser salvo em um arquivo .js.
Então os dados podem ser gerados através do comando __data-machine generate__. Segue um exemplo:

```
$ data-machine generate data-molds.js 10
```
Este comando cria um array com 10 objetos _estruturados segundo os data molds informados no arquivo data-molds.js_. Ele gera um arquivo com o nome _data.json_, que contém os dados gerados. Por exemplo, o comando supracitado pode gerar o _json_ abaixo. 

```
[{"name":"ullamco","email":"aliquip@outlook.com","birthday":"1997-06-07T03:15:56.000Z"},
{"name":"sunt","email":"esse@yahoo.com.br","birthday":"1999-02-19T06:29:33.000Z"},
{"name":"in","email":"dolore@outlook.com","birthday":"1994-04-01T22:12:30.000Z","location":{"lat":12.737,"lng":92.556}},
{"name":"sit","email":"non@yahoo.com.br","birthday":"1986-03-14T07:39:50.000Z"},
{"name":"est","email":"aute@1sti.com.br","birthday":"1985-10-11T06:33:04.000Z","location":{"lat":82.536,"lng":10.643}},
{"name":"consequat","email":"nostrud@gmail.com","birthday":"1998-12-03T03:37:09.000Z","location":{"lat":79.237,"lng":43.454}},
{"name":"est","email":"exercitation@1sti.com.br","birthday":"1984-01-06T17:47:24.000Z","location":{"lat":98.716,"lng":24.391}},
{"name":"tempor","email":"proident@outlook.com","birthday":"1987-09-15T00:52:35.000Z"},
{"name":"nisi","email":"aliqua@vnw.com.br","birthday":"1982-09-05T03:58:51.000Z"},
{"name":"aliqua","email":"eiusmod@1sti.com.br","birthday":"1986-03-21T18:53:13.000Z","location":{"lat":90.268,"lng":35.269}}]
```
Note que os objetos do array não são todos iguais. Como podemos ver, parte dos objetos não possui o atributo _location_. Isso aconteceu porque foram definidos dois _data molds_ no array _dataMolds_ do arquivo _data-molds.js_, que foi utilizado em um dos parâmetros do comando _data-machine_. O _data-machine_ sorteia um dos _data molds_ para gerar cada objeto do array.

### Attribute Types

Os ___attribute types___ são strings que são usadas informar ao data-machine o conjunto de valores possíveis para cada atributo de um objeto.

Att Type                   | Parâmetros | 
---------                  | ------ |
bool                       | não tem |
integer:min;max            | min: limite inferior / max: limite superior |
decimal:places;min;max     | places: número de casas decimais / min: limite inferior / max: limite superior |
word                       | não tem |
text:n                     | n: quantidade de palavras |
name                       | não tem |
email                      | não tem
date:minyear;maxyear       | minyear: limite inferior / maxyear: limite superior
