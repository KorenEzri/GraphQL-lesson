import { IAuthor } from "../../types";

export function Author({ author }: { author: IAuthor }) {
  return (
    <div>
      <div className="author">
        <span>{author?.name}</span>
        {author?.books && (
          <span>, has published books: {author?.books[0]?.title}</span>
        )}
      </div>
    </div>
  );
}
