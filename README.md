# datamachine

Esta ferramenta CLI produz dados falsos com realismo e precisão

### Installation

Execute o comando pelo terminal:
```
sudo npm i -g datamachine
```
O programa será instalado globalmente e poderá ser utilizado em qualquer diretório através do comando ___datamachine___.

### Getting started
Para gerar dados com o _datamachine_, deve-se antes de qualquer coisa, criar o _data schema_ e salvar em um arquivo .js. Segue um exemplo:
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
Então os dados podem ser gerados através do comando __datamachine generate__, como por exemplo:
```
$ datamachine generate candidato.schema.js 10
```
Este comando cria um array com 10 objetos, estruturados segundo os schema informado no arquivo __candidato.schema.js__. Ele gera um arquivo com o nome __data.json__, que contém os dados gerados. Por exemplo, o comando supracitado pode gerar o _json_ abaixo. 

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

### Attribute Types

Att Type                | Exemplo           | Valores
---------               | -------           | ------
boolean                 | "boolean"         | true, false
integer:min;max         | "integer:20;50"   | 11, 40, 23, ...
decimal:places;min;max  | "decimal:2;20;50" | 29.11, 41.10, 29.96, ...
primeNumber:min;max     | "primeNumber:1;10" | 2, 7, 3, ...
date:minyear;maxyear    | "date:1990;2000"  | 1998-05-24T05:41:16.000Z, ...
latitude                | "latitude"    | 33.1238, -12.4788, ...
longitude               | "longitude"   | -100.9198, 177.1068, ...
enum                    | lista de valores  | "enum:maçã;uva;pera" | maçã, uva, pera
id                      | "id"    | -dm-1545847763800-8y6iPo, -dm-1545847763800-FIg6Jx, ...
email                   | "email"           | danny4@gmail.com, paris.mohr@gmail.com, ...
firstName               | "firstName"       | Liliana, Jessie, Brady, ...
lastName                | "lastName"        | Wiza, Predovic, Jones, ...
name                    | "name"        | Tobin Wyman, Emilia Bahringer e Eveline Moore
job                     | "job"   | Customer Intranet Producer, Legacy Accounts Specialist, ...
word                    | "word" | temporibus, ratione, reiciendis, ...
text                    | "text" | excepturi, Nihil vel impedit repellendus et et repellat officiis., ...
paragraph               | "paragraph"   | Soluta aut sunt et. Vero vitae fugiat ratione aut cupiditate mollitia rem. Quasi quia quae quis labore consequatur distinctio excepturi quas. Vero iure alias voluptatum ipsum dolore ut consequatur ut.
paragraphs              | "paragraphs"  | Rerum optio quaerat. Doloribus ratione maiores. Deleniti soluta ipsa nobis unde qui enim. Numquam quo minima impedit deleniti quos autem dolor.\n \rIure minima deleniti. Voluptas ut maiores rerum. Sunt dolore magni voluptates tenetur molestiae. Illum voluptatibus numquam error non laboriosam et iusto quae. Quia corrupti fugit. Necessitatibus deserunt porro.\n \rAut in ut omnis. Repudiandae molestias eaque quis in cupiditate. Nulla dicta et asperiores quasi omnis molestiae rerum.
cpf                     | "cpf"             |211.508.653-85, 313.628.781-97, ...
