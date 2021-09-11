// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    _id: ID!
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(inputIt: savedBook!): User
    removeBook(bookId: ID!): User
  }

  `;

// export the typeDefs
module.exports = typeDefs;
