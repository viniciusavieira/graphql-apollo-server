import { gql } from 'apollo-server';

export default gql`
  type Query {
    """
    It should return a test message of type String
    """
    testMessage: String!
    """
    It should return a int
    """
    intTest: Int!
    """
    It should return an array of 3 random number
    """
    arrTest: [Int]!
  }
`;