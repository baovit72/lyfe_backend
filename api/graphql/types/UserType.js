const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { NoteType } = require('./NoteType');

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (user) => user.id,
    },
    username: {
      type: GraphQLString,
      resolve: (user) => user.username,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
    fullname: {
      type: GraphQLString,
      resolve: (user) => user.fullname,
    },
    avatar_url: {
      type: GraphQLString,
      resolve: (user) => user.avatar_url,
    },
    phone: {
      type: GraphQLString,
      resolve: (user) => user.phone,
    },
    address: {
      type: GraphQLString,
      resolve: (user) => user.address,
    },
    notes: {
      type: new GraphQLList(NoteType),
      resolve: (user) => user.getNotes(),
    },
    birthday: {
      type: GraphQLInt,
      resolve: (user) => user.birthday,
    },

    createdAt: {
      type: GraphQLString,
      resolve: (user) => user.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (user) => user.updatedAt,
    },
  }),
});

module.exports = { UserType };
