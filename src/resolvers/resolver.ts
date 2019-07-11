import { environment } from '../environment';

console.log(environment)

export default {
  Query: {
    testMessage: ():string => {
      return 'Testing the resolver';
    },
    intTest: ():number => {
      return 77
    },
    arrTest: ():[number, number, number] => {
      return [Math.round(Math.random()*300), Math.round(Math.random()*500), Math.round(Math.random()*3)]
    }
  }
}