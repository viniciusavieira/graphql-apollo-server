import { gql } from 'apollo-server';

export default gql`
  type Query {
    """
    It should return a test message of type String
    """
    testMessage: String!
  }
`;