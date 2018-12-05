const express = require('express');
const { Model } = require('objection');
const morgan = require('morgan');
const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-express');
const db = require('./config/db');

const app = express();
const { PORT } = process.env;

Model.knex(db);

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat('/graphql/schema.gql'), 'utf8')}
`;
const resolvers = require('./graphql/resolvers');
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.use(morgan('tiny'));

function start() {
  console.log('Connected to database');
  app.listen(PORT, () => console.log('Express server started on port ', PORT));
}

start();
