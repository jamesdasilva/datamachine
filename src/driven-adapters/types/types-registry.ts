import IObtainTypes from '../../boundary/driven-port/i-obtain-types';
import BooleanGen from './boolean';
import CpfGen from './cpf';
import DateGen from './date';
import Decimal from './decimal';
import RegExpGen from './RegExpGen';
import EmailGen from './email';
import EnumGen from './enum';
import FirstNameGen from './firstName';
import IdGen from './id';
import IntegerGen from './integer';
import JobGen from './job';
import LastNameGen from './lastName';
import LatitudeGen from './latitude';
import LongitudeGen from './longitude';
import NameGen from './name';
import ParagraphGen from './paragraph';
import ParagraphsGen from './paragraphs';
import PrimeNumberGen from './primeNumber';
import TextGen from './text';
import WordGen from './word';
import idAutoIncrementGen from './idAutoIncrement';



export default class TypeProvider implements IObtainTypes {
  private types = {};
  constructor() {
    this.types['boolean'] = BooleanGen;
    this.types['cpf'] = CpfGen;
    this.types['date'] = DateGen;
    this.types['decimal'] = Decimal;
    this.types['regexp'] = RegExpGen;
    this.types['email'] = EmailGen;
    this.types['enum'] = EnumGen;
    this.types['firstName'] = FirstNameGen;
    this.types['id'] = IdGen;
    this.types['idAutoIncrement'] = idAutoIncrementGen;
    this.types['integer'] = IntegerGen;
    this.types['job']= JobGen;
    this.types['lastName']= LastNameGen;
    this.types['latitude']= LatitudeGen;
    this.types['longitude']= LongitudeGen;
    this.types['name']= NameGen;
    this.types['paragraph']= ParagraphGen;
    this.types['paragraphs']= ParagraphsGen;
    this.types['primeNumber']= PrimeNumberGen;
    this.types['text']= TextGen;
    this.types['word']= WordGen;
  }

  public get(tName){
    return new this.types[tName]();
  }
}