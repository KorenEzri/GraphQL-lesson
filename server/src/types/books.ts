export interface IBook {
  id: number
  title: string
  text: string
  author: IAuthor
  cover: string
}

export interface IAuthor {
  id: number
  name: string
  books: IBook[]
}
