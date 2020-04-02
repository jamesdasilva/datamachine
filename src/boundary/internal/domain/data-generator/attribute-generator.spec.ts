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

beforeEach(() => {
  typesRegistryGetStub = sinon.stub(TypesRegistry.prototype,'get');
  typesRegistryGetStub.withArgs('name').returns({
    generate:(params) => 'James da Silva'
  });
  typesRegistryGetStub.withArgs('decimal').returns({
    generate:(params) => "2.04"
  });
  fakeTypesRegistry = new TypesRegistry();
});

afterEach(() => {
  typesRegistryGetStub.restore();
});

describe('class AttributeGenerator', () => {
  describe('The class receives as dynamic dependency an object that provides the type object', () => {
    it('The generate() method must call the get method of the type object internally', () => {
      new AttributeGenerator(fakeTypesRegistry).generate('name');
      chai.expect(fakeTypesRegistry.get.called).to.be.true;
    });
  });
  describe('The generate() method should generate a value of the type chosen by the user', () => {
    it('When passing "name" as a parameter, it must return a string with the generated name', () => {
      const attNameValue = new AttributeGenerator(fakeTypesRegistry).generate('name');
      chai.expect(attNameValue).to.equal('James da Silva');
    });

    it('When passing "decimal:2;2;5" as a parameter, it must return a number with the generated decimal', () => {
      const attDecimalValue = new AttributeGenerator(fakeTypesRegistry).generate('decimal:2;2;5');
      chai.expect(attDecimalValue).to.equal("2.04");
    });
  });
});