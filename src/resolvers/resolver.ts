export default {
  Query: {
    //fieldName(obj, args, context, info) { result }
    testMessage: ():string => {
      return 'Testing the resolver';
    }
  }
}