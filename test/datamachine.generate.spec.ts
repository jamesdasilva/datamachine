var _chai = require('chai');
import Datamachine from '../src/library/datamachine';
import JsonRegistry from '../src/registry/json-registry'
import ArrayGenerator from '../src/domain/data-generation/array-generator';
import sinon = require('sinon');

describe.only('Datamachine', () => {
  describe('.generate()', () => {
    let schemaContent;
    let schemaName;
    let length = 3;
    let options;
    let dataArray;
    let readStub;
    let writeStub;
    let generateStub;
    beforeEach(() => {
      schemaContent = { 
        schema: {
          count: 'integer:20;50'
        }
      };
      dataArray = [
        { count: 30},
        { count: 21},
        { count: 43}
      ];
      schemaName = 'candidato.schema.json';
      length = 10;
      options = { 
        structure: 'array',
        outName: 'candi.json'
      };
      readStub = sinon.stub(JsonRegistry.prototype, <any>'read').returns(schemaContent);
      writeStub = sinon.stub(JsonRegistry.prototype, <any>'write').returns(true);
      generateStub = sinon.stub(ArrayGenerator.prototype, <any>'generate').returns(dataArray);
    });
    afterEach(() => {
      readStub.restore();
      writeStub.restore();
      generateStub.restore();
    });
    it('Deve ler o arquivo do schema', () => {
      const datamachine = new Datamachine();
      datamachine.generate(schemaName, length, options);
      sinon.assert.calledOnce(readStub);
    });
    it('Se houver schema, deve gerar a massa de dados', () => {
      const datamachine = new Datamachine();
      datamachine.generate(schemaName, length, options);
      sinon.assert.calledOnce(generateStub);
    });
    it('Deve salvar a massa gerada em um arquivo de saída', () => {
      const datamachine = new Datamachine();
      datamachine.generate(schemaName, length, options);
      sinon.assert.calledOnce(writeStub);
    });
  });
});