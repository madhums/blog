const express = require('express');
const { Model } = require('objection');
const morgan = require('morgan');
const { ApolloServer, gql } = require('apollo-server-express');
const db = require('./config/db');

const app = express();
const { PORT } = process.env;

Model.knex(db);

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const v1 = require('./config/routes');
app.use(morgan('tiny'));
app.use('/api/v1', v1);

function start() {
  console.log('Connected to database');
  app.listen(PORT, () => console.log('Express server started on port ', PORT));
}

start();
