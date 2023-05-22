const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
  password: String
}

type Auth {
  token: ID!
  user: User
}
type AdoptionForm {
  first_name: String!
  last_name: String!
  phone_number: Int
  description: String!
}
type Dog {
  _id: ID
  name: String!
  breed: String!
  age: String!
  size: String!
  gender: String!
  image: String
  description: String!

type Query {
  users: [User]
  user(username: String!): User
  dogs: [Dog]
  dog(_id: ID!): Dog
}
 
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    newAdoptionForm(first_name: String!, last_name: String!, phone_number: Int, description: String!): AdoptionForm
    login(email: String!, password: String!): Auth
    newDog(name: String!, breed: String!, age: String!, size: String!, gender: String!, image: String, description: String! ): Dog
  }
`;

module.exports = typeDefs;
