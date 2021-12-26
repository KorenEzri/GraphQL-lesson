import { Book, Author } from "..";
import { IBook, IAuthor } from "../../types";
import { useApolloClient } from "@apollo/client";
import { mutationDeleteBook, mutateAndSetState } from "../../apollo";

interface Props {
  book: IBook;
  author: IAuthor;
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export function BookDisplay({ book, author, setBooks }: Props) {
  const client = useApolloClient();

  return book && author ? (
    <div
      className="book_display"
      onDoubleClick={async () => {
        try {
         await mutateAndSetState({
            client,
            action: mutationDeleteBook,
            variables: { id: Number(book.id) } as any,
            setter: setBooks
          });
        } catch ({ message }) {
          console.log(message);
        }
      }}
    >
      <Book book={book} />
      <Author author={author} />
    </div>
  ) : null;
}
