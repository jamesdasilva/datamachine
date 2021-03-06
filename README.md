# datamachine

[![Build Status](https://travis-ci.com/jamesdasilva/datamachine.svg?branch=master)](https://travis-ci.com/jamesdasilva/datamachine)

Através da Datamachine você consegue produzir dados falsos com realismo e precisão para simular API's, fontes de dados e estados de processamento. Para gerar os dados, a Datamachine utiliza bibliotecas como chance.js, Faker.js e randexp.js.

Tendo dados realistas em mãos, fica mais fácil desenvolver partes de um software, como no caso de ter que fazer o front-end sem ter o back-end disponível. Você pode, por exemplo, criar dublês de API's que ainda não foram construídas, combinado a Datamachine com Json Server. 

Para você conseguir gerar dados ainda mais precisos, __Datamachine__ permite a manipulação de massas de dados, combinando, concatenando ou embaralhando para gerar massas de dados ainda mais elaboradas.

<img src="img-help-command.png" />

### Installation

Execute o comando pelo terminal:
```
sudo npm i -g datamachine
```
O programa será instalado globalmente e poderá ser utilizado em qualquer diretório através do comando ___datamachine___.

### Getting started
Para gerar dados com o _datamachine_, deve-se antes de qualquer coisa, criar o _data schema_ e salvar em um arquivo schema.json. Segue um exemplo:
```
{
  "version": "2.0.0",
  "schema": [{
    "contador": "idAutoIncrement",
    "inteiro": "integer:20;50",
    "valor": "decimal:2;20;50",
    "primos": "primeNumber:1;10",
    "logico": "boolean",
    "fruta":"enum:maçã;uva;pera",
    "nome": "name",
    "cpf": "cpf",
    "nascimento": "date:1990;1994",
    "mediaEnem": "decimal:2;300;1000"
  }]
}
```
Então os dados podem ser gerados através do comando __datamachine generate__, como por exemplo:
```
$ datamachine generate candidato.schema.json 5
```
Este comando cria um array com 5 objetos, estruturados segundo os schema informado no arquivo __candidato.schema.js__. Ele gera um arquivo com o nome __candidato.data.json__, que contém os dados gerados. Por exemplo, o comando supracitado pode gerar o _json_ abaixo. 

```
[{"nome":"Andrew Goyette","cpf":"874.281.534-76","celular":"(31) 55190-5339","nascimento":"1992-01-21T10:19:27.000Z","curso":"Letras","mediaEnem":762.97},
{"nome":"Bettye Legros","cpf":"455.159.591-83","celular":"(18) 93105-3613","nascimento":"1993-10-24T01:18:09.000Z","curso":"Comunicação Social","mediaEnem":961.82},
{"nome":"Ressie Donnelly","cpf":"507.009.678-85","celular":"(45) 58872-4444","nascimento":"1993-10-18T00:29:04.000Z","curso":"Comunicação Social","mediaEnem":719.55},
{"nome":"Glennie Hyatt","cpf":"535.377.996-75","celular":"(36) 12295-4648","nascimento":"1992-03-13T14:32:13.000Z","curso":"Medicina","mediaEnem":437.51},
{"nome":"Mr. Ericka Schmeler","cpf":"086.883.462-91","celular":"(42) 91668-3807","nascimento":"1992-04-27T01:55:03.000Z","curso":"Letras","mediaEnem":385.61}]
```
Note que um schema é basicamente um objeto JSON, em que os valores dos atributos são strings. Esses valores defininem o formato dos dados que serão gerados na saída do comando __generate__. O atributo do schema que tiver a string 'decimal:2;300;1000' como valor, irá gerar atributos com valores que serão números com duas casas decimais no intervalo entre 300.00 e 1000.00, como 567.00, 300.54 e 971,67, por exemplo.

### String Types

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

### Combine Command

Com o comando __combine__ é possível gerar massas de dados a partir da combinação de outras massas de dados. Ele dá duas opções: merge e child. O merge, que é a opção padrão, gera uma massa de dados, em que o n-ésimo objeto possui os atributos com os valores do n-ésimo objeto da primeira massa somado aos atributos com os valores de um objeto sorteado da segunda massa.

Por exemplo, executando o comando:
```
datamachine combine pessoas.json cidades.json
```
Considerando que o conteúdo de pesssoas.json é:
```
[ {"name":"Antonina Schroeder","cpf":"067.710.318-29"},
{"name":"Coralie Yost","cpf":"514.495.434-05"},
{"name":"John Wintheiser","cpf":"632.071.773-44"},
{"name":"Dolores Murazik","cpf":"145.943.869-89"},
{"name":"Aron Runte","cpf":"857.366.231-02"},
{"name":"Mr. Caitlyn Weissnat","cpf":"034.723.997-83"},
{"name":"Marisol Friesen","cpf":"363.207.003-27"},
{"name":"Ardella Hettinger","cpf":"925.747.039-36"},
{"name":"Freeman Senger","cpf":"449.370.375-01"},
{"name":"Rocky Runte","cpf":"517.723.566-11"}]
```
E o conteúdo de cidades.json é:
```
[{"cidade":"Juazeiro","UF":"Bahia"},
{"cidade":"Petrolina","UF":"Pernambuco"},
{"cidade":"São Paulo","UF":"São Paulo"}]
```
O resultado terá o conteúdo:
```
[{"name":"Antonina Schroeder","cpf":"067.710.318-29","cidade":"Juazeiro","UF":"Bahia"},
{"name":"Coralie Yost","cpf":"514.495.434-05","cidade":"São Paulo","UF":"São Paulo"},
{"name":"John Wintheiser","cpf":"632.071.773-44","cidade":"Juazeiro","UF":"Bahia"},
{"name":"Dolores Murazik","cpf":"145.943.869-89","cidade":"São Paulo","UF":"São Paulo"},
{"name":"Aron Runte","cpf":"857.366.231-02","cidade":"Juazeiro","UF":"Bahia"},
{"name":"Mr. Caitlyn Weissnat","cpf":"034.723.997-83","cidade":"São Paulo","UF":"São Paulo"},
{"name":"Marisol Friesen","cpf":"363.207.003-27","cidade":"São Paulo","UF":"São Paulo"},
{"name":"Ardella Hettinger","cpf":"925.747.039-36","cidade":"Juazeiro","UF":"Bahia"},
{"name":"Freeman Senger","cpf":"449.370.375-01","cidade":"Juazeiro","UF":"Bahia"},
{"name":"Rocky Runte","cpf":"517.723.566-11","cidade":"Petrolina","UF":"Pernambuco"}]
```

Se for usado o parâmetro child, como no exemplo a seguir:
```
datamachine combine pessoas.data.json cidades.data.json --child=cidade
```
O resultado será:
```
[{"name":"Antonina Schroeder","cpf":"067.710.318-29","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Coralie Yost","cpf":"514.495.434-05","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"John Wintheiser","cpf":"632.071.773-44","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Dolores Murazik","cpf":"145.943.869-89","cidade":{"cidade":"Petrolina","UF":"Pernambuco"}},
{"name":"Aron Runte","cpf":"857.366.231-02","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Mr. Caitlyn Weissnat","cpf":"034.723.997-83","cidade":{"cidade":"Petrolina","UF":"Pernambuco"}},
{"name":"Marisol Friesen","cpf":"363.207.003-27","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Ardella Hettinger","cpf":"925.747.039-36","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Freeman Senger","cpf":"449.370.375-01","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Rocky Runte","cpf":"517.723.566-11","cidade":{"cidade":"São Paulo","UF":"São Paulo"}}]
```
Ou seja, os objetos do resultado será aninhados.

### Concat Command
Com o comando __concat__ é possível gerar uma nova massa com tamanho n a partir da concatenção de duas outras massas.
```
datamachine concat massa1.data.json massa2.data.json
```
Sendo massa1.data.json:
```
[{"name":"Antonina Schroeder","cpf":"067.710.318-29"},
{"name":"Coralie Yost","cpf":"514.495.434-05"},
{"name":"John Wintheiser","cpf":"632.071.773-44"},
{"name":"Dolores Murazik","cpf":"145.943.869-89"},
{"name":"Aron Runte","cpf":"857.366.231-02"},
{"name":"Mr. Caitlyn Weissnat","cpf":"034.723.997-83"},
{"name":"Marisol Friesen","cpf":"363.207.003-27"},
{"name":"Ardella Hettinger","cpf":"925.747.039-36"},
{"name":"Freeman Senger","cpf":"449.370.375-01"},
{"name":"Rocky Runte","cpf":"517.723.566-11"}]
```
E massa2.data.json:
```
[{"name":"Antonina Schroeder","cpf":"067.710.318-29","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Coralie Yost","cpf":"514.495.434-05","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"John Wintheiser","cpf":"632.071.773-44","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Dolores Murazik","cpf":"145.943.869-89","cidade":{"cidade":"Petrolina","UF":"Pernambuco"}},
{"name":"Aron Runte","cpf":"857.366.231-02","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Mr. Caitlyn Weissnat","cpf":"034.723.997-83","cidade":{"cidade":"Petrolina","UF":"Pernambuco"}},
{"name":"Marisol Friesen","cpf":"363.207.003-27","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Ardella Hettinger","cpf":"925.747.039-36","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Freeman Senger","cpf":"449.370.375-01","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Rocky Runte","cpf":"517.723.566-11","cidade":{"cidade":"São Paulo","UF":"São Paulo"}}]
```
Resultado:
```
[{"name":"Antonina Schroeder","cpf":"067.710.318-29"},
{"name":"Coralie Yost","cpf":"514.495.434-05"},
{"name":"John Wintheiser","cpf":"632.071.773-44"},
{"name":"Dolores Murazik","cpf":"145.943.869-89"},
{"name":"Aron Runte","cpf":"857.366.231-02"},
{"name":"Mr. Caitlyn Weissnat","cpf":"034.723.997-83"},
{"name":"Marisol Friesen","cpf":"363.207.003-27"},
{"name":"Ardella Hettinger","cpf":"925.747.039-36"},
{"name":"Freeman Senger","cpf":"449.370.375-01"},
{"name":"Rocky Runte","cpf":"517.723.566-11"},
{"name":"Antonina Schroeder","cpf":"067.710.318-29","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Coralie Yost","cpf":"514.495.434-05","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"John Wintheiser","cpf":"632.071.773-44","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Dolores Murazik","cpf":"145.943.869-89","cidade":{"cidade":"Petrolina","UF":"Pernambuco"}},
{"name":"Aron Runte","cpf":"857.366.231-02","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Mr. Caitlyn Weissnat","cpf":"034.723.997-83","cidade":{"cidade":"Petrolina","UF":"Pernambuco"}},
{"name":"Marisol Friesen","cpf":"363.207.003-27","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Ardella Hettinger","cpf":"925.747.039-36","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Freeman Senger","cpf":"449.370.375-01","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Rocky Runte","cpf":"517.723.566-11","cidade":{"cidade":"São Paulo","UF":"São Paulo"}}]
```

### Shuffle Command

```
datamachine shuffle massa1.data.json
```

Resultado:
```
[{"name":"Aron Runte","cpf":"857.366.231-02"},
{"name":"Dolores Murazik","cpf":"145.943.869-89"},
{"name":"Coralie Yost","cpf":"514.495.434-05","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"John Wintheiser","cpf":"632.071.773-44","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Coralie Yost","cpf":"514.495.434-05"},
{"name":"Marisol Friesen","cpf":"363.207.003-27","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"Dolores Murazik","cpf":"145.943.869-89","cidade":{"cidade":"Petrolina","UF":"Pernambuco"}},
{"name":"Ardella Hettinger","cpf":"925.747.039-36","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Mr. Caitlyn Weissnat","cpf":"034.723.997-83"},
{"name":"Freeman Senger","cpf":"449.370.375-01"},
{"name":"Antonina Schroeder","cpf":"067.710.318-29"},
{"name":"Freeman Senger","cpf":"449.370.375-01","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Ardella Hettinger","cpf":"925.747.039-36"},
{"name":"Antonina Schroeder","cpf":"067.710.318-29","cidade":{"cidade":"São Paulo","UF":"São Paulo"}},
{"name":"Marisol Friesen","cpf":"363.207.003-27"},
{"name":"Rocky Runte","cpf":"517.723.566-11"},
{"name":"Mr. Caitlyn Weissnat","cpf":"034.723.997-83","cidade":{"cidade":"Petrolina","UF":"Pernambuco"}},
{"name":"Aron Runte","cpf":"857.366.231-02","cidade":{"cidade":"Juazeiro","UF":"Bahia"}},
{"name":"John Wintheiser","cpf":"632.071.773-44"},
{"name":"Rocky Runte","cpf":"517.723.566-11","cidade":{"cidade":"São Paulo","UF":"São Paulo"}}]
```


