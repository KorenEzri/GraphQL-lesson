import { gql } from 'apollo-server-express'
/**
 * @ID scalar type: https://graphql.org/learn/schema/#:~:text=ID%3A%20The%20ID%20scalar%20type%20represents%20a%20unique%20identifier%2C%20often%20used%20to%20refetch%20an%20object%20or%20as%20the%20key%20for%20a%20cache.%20The%20ID%20type%20is%20serialized%20in%20the%20same%20way%20as%20a%20String%3B%20however%2C%20defining%20it%20as%20an%20ID%20signifies%20that%20it%20is%20not%20intended%20to%20be%20human%E2%80%90readable.
 * @Symbol '!' means - required property.
 */

export const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  input AuthorInput {
    name: String!
    books: [BookInput]
  }

  input BookInput {
    title: String!
    text: String!
    author: AuthorInput!
    cover: String!
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
    text: String!
    cover: String!
  }

  type Query {
    # books
    getAllBooks: [Book]
    getBooksByTitle(titleContains: String!): [Book]
    getBookById(id: Int!): Book
    # author
    getAuthorById(id: Int!): Author
  }

  type Mutation {
    addBook(book: BookInput!): Book
    deleteBook(id: Int!): [Book]
  }
`
