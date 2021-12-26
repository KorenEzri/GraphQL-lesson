import { isCompositeType } from 'graphql'
import {
  QueryGetBookByIdArgs,
  QueryGetBooksByTitleArgs,
  MutationDeleteBookArgs,
} from '../../generated'
import { booksMock } from './mock'

export const resolvers = {
  Query: {
    getAllBooks: () => booksMock,
    getBookById: (_: undefined, { id: bookId }: QueryGetBookByIdArgs) => {
      return booksMock.find(({ id }) => id === bookId)
    },
    getBooksByTitle: (
      _: undefined,
      { titleContains }: QueryGetBooksByTitleArgs
    ) => {
      const found = booksMock.filter(({ title }) =>
        title.includes(titleContains)
      )

      return found ? found : booksMock
    },
  },
  Mutation: {
    deleteBook: (_: undefined, { id: bookId }: MutationDeleteBookArgs) => {
      const bookIndex = booksMock.findIndex(({ id }) => id === bookId)

      if (bookIndex !== -1) {
        booksMock.splice(bookIndex, 1)

        return booksMock
      } else {
        return new Error(`Book ${bookId} not found!`)
      }
    },
  },
}
