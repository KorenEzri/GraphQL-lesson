import { gql } from "@apollo/client";

export const queryGetAuthor = gql`
  query getAuthor($id: Int!) {
    getAuthor(id: $id) {
      name
      books {
        title
        author {
          name # this will be the same as the name above
        }
      }
    }
  }
`;

export const queryGetBooksByTitle = gql`
  query getBooksByTitle($titleContains: String!) {
    getBooksByTitle(titleContains: $titleContains) {
      title
      cover
      author {
        name
        books {
          title
        }
      }
    }
  }
`;

export const queryGetAllBooks = gql`
  query getAllBooks {
    getAllBooks {
      id
      title
      cover
      author {
        name
        books {
          title
        }
      }
    }
  }
`;

export const mutationDeleteBook = gql`
  mutation deleteBook($id: Int!) {
    deleteBook(id: $id) {
      id
      title
      cover
      author {
        name
        books {
          title
        }
      }
    }
  }
`;
