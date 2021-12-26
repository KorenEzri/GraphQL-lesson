import * as React from "react";
import { BookDisplay } from "..";

import { IBook } from "../../types";

export function BooksGrid({
  books,
  setBooks,
}: {
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}) {
  return (
    <div id="list-th">
      <div>
        {books.map((book: IBook, index: number) => {
          return (
            <div className="book unread" key={`bookDiv${index}key`}>
              <BookDisplay
                setBooks={setBooks}
                key={`book${index}key`}
                book={book}
                author={book.author}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
