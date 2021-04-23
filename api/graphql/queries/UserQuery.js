const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { UserType } = require('../types');
const { User } = require('../../models');

const userQuery = {
  type: new GraphQLList(UserType),
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
    username: {
      name: 'username',
      type: GraphQLString,
    },
    email: {
      name: 'email',
      type: GraphQLString,
    },
    fullname:{
      name: 'fullname',
      type: GraphQLString,
    },
    notes: {
      name: 'notes',
      type: GraphQLString,
    },
    address: {
      name: 'notes',
      type: GraphQLString,
    },
    phone: {
      name: 'notes',
      type: GraphQLString,
    },
    avatar_url: {
      name: 'notes',
      type: GraphQLString,
    },
    birthday: {
      name: 'id',
      type: GraphQLInt,
    },
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: (user, args) => User.findAll({ where: args }),
};

module.exports = { userQuery };
