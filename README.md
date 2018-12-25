# datamachine

Esta máquina fabrica dados falsos para preencher módulos simulados com a intenção de poder desenvolver novos módulos para produção em um ambiente controlado. A estrutura de dados falsa é declarada em objetos de esquema.

### Installation

Dentro do diretório raiz do projeto, execute o comando pelo terminal:
```
sudo npm -g install .
```
O programa será instalado globalmente e poderá ser utilizado em qualquer diretório através do comando ___datamachine___.

### Getting started
Para gerar dados com o _datamachine_, deve-se antes de qualquer coisa, criar o _data schema_, como por exemplo:
```
var molds = [];
molds.push({
    name: 'name',
    cpf: 'cpf',
    nascimento: 'date:1990;1994',
    curso: 'enum:Engenharia de Computação;Medicina;Letras;Comunicação Social',
    mediaEnem: 'decimal:2;300;1000'
});
module.exports = molds;
```
Como se pode ver, trata-se de um array com objetos em que os valores são _strings que determinarão os valores dos objetos que serão criados pela datamachine_. Este código deve ser salvo em um arquivo .js.
Então os dados podem ser gerados através do comando __datamachine generate__. Segue um exemplo:

```
$ datamachine generate candidato.schema.js 10
```
Este comando cria um array com 10 objetos _estruturados segundo os schema informado no arquivo candidato.schema.js_. Ele gera um arquivo com o nome _data.json_, que contém os dados gerados. Por exemplo, o comando supracitado pode gerar o _json_ abaixo. 

```
[{"name":"Henry Labadie","cpf":"259.079.375-80","nascimento":"1992-07-08T09:00:18.000Z","curso":"Letras","mediaEnem":"817.67"},
{"name":"Luigi Goodwin","cpf":"887.295.600-55","nascimento":"1992-12-20T11:30:32.000Z","mediaEnem":"324.16"},
{"name":"Jesus Dare","cpf":"685.405.782-55","nascimento":"1991-01-24T13:46:49.000Z","mediaEnem":"636.01"},
{"name":"Dr. Kenna Tillman","cpf":"514.215.299-98","nascimento":"1993-07-21T16:38:00.000Z","mediaEnem":"898.92"},
{"name":"Rodolfo Waelchi","cpf":"365.512.467-88","nascimento":"1992-06-12T17:02:50.000Z","mediaEnem":"355.73"},
{"name":"Doyle Kutch","cpf":"984.622.157-65","nascimento":"1993-07-22T06:25:09.000Z","mediaEnem":"306.28"},
{"name":"Eveline Moore","cpf":"146.971.653-49","nascimento":"1993-05-19T08:37:48.000Z","mediaEnem":"386.64"},
{"name":"Hope Sporer","cpf":"913.349.720-60","nascimento":"1992-03-20T14:24:23.000Z","mediaEnem":"577.75"},
{"name":"Chanelle Cummings MD","cpf":"417.434.903-72","nascimento":"1992-03-06T23:50:03.000Z","mediaEnem":"855.17"},
{"name":"Emilia Bahringer","cpf":"464.458.705-20","nascimento":"1993-02-21T13:09:34.000Z","mediaEnem":"827.90"}]
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
