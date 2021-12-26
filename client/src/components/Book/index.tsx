import React from "react";
import { IBook } from "../../types";

export function Book({ book }: { book: IBook }) {
  return (
    <div >
      <div className="cover">
        <img src={book.cover}/>
      </div>
      <div className="description">
        <p className="title">
          {book.title}
          <br />
        </p>
      </div>
    </div>
  );
}
