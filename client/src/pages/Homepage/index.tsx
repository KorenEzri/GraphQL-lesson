import React from "react";
import { Header, BooksGrid } from "../../components";
import { IBook } from "../../types";
import {
  queryAndSetState,
  queryGetAllBooks,
  queryGetBooksByTitle,
} from "../../apollo";
import "./Homepage.css";
import { useApolloClient } from "@apollo/client";
let times: NodeJS.Timeout;

export function Homepage() {
  const client = useApolloClient();

  const [books, setBooks] = React.useState<IBook[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>("");

  const debounce = (func: any, time?: number) => {
    clearTimeout(times);
    times = setTimeout(func, time);
  };

  const handleSearchInput = (searchInput: { target: { value: string } }) => {
    const input = searchInput.target.value;

    setSearchValue(input);

    debounce(async () => {
      try {
        await queryAndSetState({
          client,
          action: queryGetBooksByTitle,
          variables: { titleContains: input } as any,
          setter: setBooks,
        });
      } catch ({ message }) {
        console.log(message);
      }
    }, 250);
  };

  React.useEffect(() => {
    (async () => {
      try {
        await queryAndSetState({
          client,
          action: queryGetAllBooks,
          setter: setBooks,
        });
      } catch ({ message }) {
        console.log(message);
      }
    })();
  }, []);

  return (
    <div className="wrapper" id="large-th">
      <div>
        <Header />
      </div>
      <div>
        <input
          className="search"
          value={searchValue}
          type="text"
          placeholder="Search"
          onChange={handleSearchInput}
        />
      </div>
      {books?.length > 0 && (
        <div className="container">
          <BooksGrid setBooks={setBooks} books={books} />
        </div>
      )}
    </div>
  );
}
