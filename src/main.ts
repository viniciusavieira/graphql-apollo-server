import { ApolloServer } from 'apollo-server';
import { environment } from './environment';
import resolvers from './resolvers/resolver';
import typeDefs from './schemas/schema';

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));


if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed.'));
}