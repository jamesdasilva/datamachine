# datamachine

Com esta ferramenta CLI você pode produzir dados falsos com realismo e precisão para simular API's, bancos de dados e estados de aplicação. Para gerar os dados, ela utiliza bibliotecas como chance.js, Faker.js e randexp.js.

### Installation

Execute o comando pelo terminal:
```
sudo npm i -g datamachine
```
O programa será instalado globalmente e poderá ser utilizado em qualquer diretório através do comando ___datamachine___.

### Getting started
Para gerar dados com o _datamachine_, deve-se antes de qualquer coisa, criar o _data schema_ e salvar em um arquivo .js. Segue um exemplo:
```
module.exports = [{
    nome: 'name',
    cpf: 'cpf',
    celular: /(\(\d{2}\) \d{5}\-\d{4})/,
    nascimento: 'date:1990;1994',
    curso: 'enum:Engenharia de Computação;Medicina;Letras;Comunicação Social',
    mediaEnem: 'decimal:2;300;1000'
}]
```
Então os dados podem ser gerados através do comando __datamachine generate__, como por exemplo:
```
$ datamachine generate candidato.schema.js 5
```
Este comando cria um array com 10 objetos, estruturados segundo os schema informado no arquivo __candidato.schema.js__. Ele gera um arquivo com o nome __data.json__, que contém os dados gerados. Por exemplo, o comando supracitado pode gerar o _json_ abaixo. 

```
[{"nome":"Andrew Goyette","cpf":"874.281.534-76","celular":"(31) 55190-5339","nascimento":"1992-01-21T10:19:27.000Z","curso":"Letras","mediaEnem":762.97},
{"nome":"Bettye Legros","cpf":"455.159.591-83","celular":"(18) 93105-3613","nascimento":"1993-10-24T01:18:09.000Z","curso":"Comunicação Social","mediaEnem":961.82},
{"nome":"Ressie Donnelly","cpf":"507.009.678-85","celular":"(45) 58872-4444","nascimento":"1993-10-18T00:29:04.000Z","curso":"Comunicação Social","mediaEnem":719.55},
{"nome":"Glennie Hyatt","cpf":"535.377.996-75","celular":"(36) 12295-4648","nascimento":"1992-03-13T14:32:13.000Z","curso":"Medicina","mediaEnem":437.51},
{"nome":"Mr. Ericka Schmeler","cpf":"086.883.462-91","celular":"(42) 91668-3807","nascimento":"1992-04-27T01:55:03.000Z","curso":"Letras","mediaEnem":385.61}]
```

### Attribute Types

Att Type                | Example           | Generated Values
---------               | -------           | ------
randExp                 | /(\(\d{2}\) \d{5}\-\d{4})/ | (31) 55190-5339", (18) 93105-3613, (45) 58872-4444
enum                    | "enum:maçã;uva;pera" | maçã, uva, maçã, pera, ...
idAutoIncrement         | "idAutoIncrement" | 1, 2, 3, 4, 5, 6, 7, ...
boolean                 | "boolean"         | true, false
integer:min;max         | "integer:20;50"   | 11, 40, 23, ...
decimal:places;min;max  | "decimal:2;20;50" | 29.11, 41.10, 29.96, ...
primeNumber:min;max     | "primeNumber:1;10" | 2, 7, 3, ...
date:minyear;maxyear    | "date:1990;2000"   | 1998-05-24T05:41:16.000Z, ...
latitude                | "latitude"    | 33.1238, -12.4788, ...
longitude               | "longitude"   | -100.9198, 177.1068, ...
id                      | "id"    | -dm-1545847763800-8y6iPo, -dm-1545847763800-FIg6Jx, ...
email                   | "email" | danny4@gmail.com, paris.mohr@gmail.com, ...
firstName               | "firstName" | Liliana, Jessie, Brady, ...
lastName                | "lastName"  | Wiza, Predovic, Jones, ...
name                    | "name" | Tobin Wyman, Emilia Bahringer e Eveline Moore
job                     | "job"  | Customer Intranet Producer, Legacy Accounts Specialist, ...
word                    | "word" | temporibus, ratione, reiciendis, ...
text                    | "text" | excepturi, Nihil vel impedit repellendus et et repellat officiis., ...
paragraph               | "paragraph"   | Soluta aut sunt et. Vero vitae fugiat ratione aut cupiditate mollitia rem. Quasi quia quae quis labore consequatur distinctio excepturi quas. Vero iure alias voluptatum ipsum dolore ut consequatur ut.
paragraphs              | "paragraphs"  | Rerum optio quaerat. Doloribus ratione maiores. Deleniti soluta ipsa nobis unde qui enim. Numquam quo minima impedit deleniti quos autem dolor.\n \rIure minima deleniti. Voluptas ut maiores rerum. Sunt dolore magni voluptates tenetur molestiae. Illum voluptatibus numquam error non laboriosam et iusto quae. Quia corrupti fugit. Necessitatibus deserunt porro.\n \rAut in ut omnis. Repudiandae molestias eaque quis in cupiditate. Nulla dicta et asperiores quasi omnis molestiae rerum.
cpf                     | "cpf"         |211.508.653-85, 313.628.781-97, ...

### combine Command

