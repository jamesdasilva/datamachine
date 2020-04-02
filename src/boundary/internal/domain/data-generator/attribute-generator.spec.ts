import chai from 'chai';
import sinon from 'sinon';
import AttributeGenerator from './attribute-generator';
import IObtainTypes from '../../../driven-port/i-obtain-types';

class TypesRegistry implements IObtainTypes {
  public get(tName: string){
    return {
      generate:(params) => {  }
    };
  }
}
let typesRegistryGetStub;
let fakeTypesRegistry;
let attGen;

beforeEach(() => {
  typesRegistryGetStub = sinon.stub(TypesRegistry.prototype,'get');
  typesRegistryGetStub.withArgs('name').returns({
    generate:(params) => 'James da Silva'
  });
  typesRegistryGetStub.withArgs('decimal').returns({
    generate:(params) => "2.04"
  });
  fakeTypesRegistry = new TypesRegistry();
  attGen = new AttributeGenerator(fakeTypesRegistry);
});

afterEach(() => {
  typesRegistryGetStub.restore();
});

describe('class AttributeGenerator', () => {
  describe('The class receives as dynamic dependency an object that provides the type object', () => {
    it('The generate() method must call the "get" method of the type object', () => {
      attGen.generate('name');
      chai.expect(fakeTypesRegistry.get.called).to.be.true;
    });
  });

  describe('The generate() method should generate a value of the type chosen by the user', () => {
    it('When passing "name" as a parameter, it must return a string with the generated name', () => {
      const attNameValue = attGen.generate('name');
      chai.expect(attNameValue).to.equal('James da Silva');
    });

    it('When passing "decimal:2;2;5" as a parameter, it must return a number with the generated decimal', () => {
      const attDecimalValue = attGen.generate('decimal:2;2;5');
      chai.expect(attDecimalValue).to.equal("2.04");
    });
  });

  describe('The extractName() method must extract the type name from a complete type string', () => {
    it('Should return "decimal" when the entry is equal to "decimal:2;2;5"', () => {
      chai.expect(attGen.extractName("decimal:2;2;5")).to.equal("decimal");
    });

    it('Should return "enum" when the entry is equal to "enum:maçã;uva;pera"', () => {
      chai.expect(attGen.extractName("enum:maçã;uva;pera")).to.equal("enum");
    });
  });

  describe('The extractParams() method must extract the type name from a complete type string', () => {
    it('Should return [2, 2, 5] when the entry is equal to "decimal:2;2;5"', () => {
      chai.expect(attGen.extractParams("decimal:2;2;5")).to.eql(['2', '2', '5']);
    });

    it('Should return ["maçã", "uva", "pera"] when the entry is equal to "enum:maçã;uva;pera"', () => {
      chai.expect(attGen.extractParams("enum:maçã;uva;pera")).to.eql(['maçã', 'uva', 'pera']);
    });
  });
});