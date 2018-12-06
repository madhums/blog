const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const User = require('../models/user');

module.exports = {
  Query: {
    users: async () => User.query()
  },
  Mutation: {
    create_user: async (root, args) => User.query().insert(args),
    remove_user: async (root, args) =>
      User.query()
        .deleteById(args.id)
        .returning('*')
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date().toISOString(); // value from the client
    },
    serialize(value) {
      return value; // value sent to the client
    },
    parseLiteral(ast) {
      console.log(Kind);
      if (ast.kind === Kind.INT) {
        // ast value is always in string format
        return new Date(ast.value).toISOString();
      }
      return null;
    }
  })
};
