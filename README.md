# Learn GraphQL - book app

In this project you will create a tiny book app!

This repository includes a basic template for starting the project.

### Setup instructions

- Fork this repository to your account as a **public** repo
- Clone your new repository to your computer 🖥
- Install the project dependencies by running `npm install` from the vscode terminal `ctrl + j` (make sure you are in the correct directory) 📂
- [Create a new branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches) for the development process
- Make changes to the code to meet the project requirements 📝
- [Commit Early, Push Often](https://www.worklytics.co/commit-early-push-often/) - your work will be evaluated by your git flow and overall github usage 🏄‍♂️
- Before submitting, create a pull request from the development branch into the main branch. **Leave the PR open and do not merge the branches**. The open PR will be used to review and mark your code
- Good Luck! 🤘

# Step one

## go over the presentation and the lesson and first create a working GraphQL server.

### Testing that your server is working:

- Create the server: remember, a GraphQL-express server consists of an `index.js/ts` file to launch it using Apollo, typeDefs and resolvers.

  - [For hints on creating a basic GraphQL server]()

- Create a new query definition in `typeDefs` and a new resolver in `resolvers` called `queryTest`. Let it return some string like `test passed!`

- Go to `localhost:YOUR_PORT_NUMBER/graphql`, and using the Apollo Studio send a query to your server and see if it returns correctly!
  - [For more info about how to use Apollo Studio]()

# Step two

## Now that your server is working, create a React app to support displaying a bunch of books with images, book titles etc. Feel free to design it as you wish, but even something [as basic as this](./assets/demo.PNG) will do.

### About the UI and what you should have by now

By now you should have a working GQL server that does nothing and a frontend UI that can potentially display books. You still don't know what the data will look like so at this point you probably just have components with props that are more or less unkown.

# Step three

### Setting up UI requests and defining queries and mutations in the server to resolve those requests.

#### Important: please take a look at [`assets/data-mock.js`]() - this is your "database", this is how your data will look.

- Create a type definition for the object you'll be dealing with
- Create a type definition for a book - what does it look like according to the `data-mock.js` mock file?
- Create a type definition for an author
- Create a new query in your `typeDefs` file to support reading all books - something like `getAllBooks`.
- Create a new resolver in your `resolvers` file to support resolving this query.
- Go to `localhost:YOUR_PORT_NUMBER/graphql` and test this query - [ask your GraphQL server]() for an array of book objects that contains a title and a cover image each.

### What you should expect to receive:

![](https://github.com/KorenEzri/GraphQL-lesson/blob/master/assets/res_example_getallbooks.PNG)

If you got this response then you are golden! If you didn't - keep trying! GraphQL can be annoying in the beginning, but it's so cool once you get the hang of it :)

# Step four

### Connecting your graph service to your frontend.

- [Follow this guide]() to learn how to connect a React app to a GraphQL server using ApolloClient
- Connect your server and create a query that fetches all the book data to the client
- Display all the books from the server in your app. It should look like [this]()

# Step five

### Expanding functionality and adding features

- For each book, now also display it's author's name.
- For each book, now also display a list of books that the author has written (see [this]() for an example: `stephen king, has published books: [list of books]`
- Add a server-side search (search the DB (the mock) in the server - don't send the whole block of data to the client and then filter it there) for books according to title - some query like `getBooksByTitle`
- Create a new mutation in your server - `deleteBook` - that will delete a book by ID. Add this functionality to your client either by using double click on a book to delete it or by adding some button.

## Important:

#### By now, including the new mutation - you should not have more than two queries and one mutation in your client or in your server. If you have more than three total then you missed something and you should try to see which of your queries is unnecessary and why.

#### Remember: GraphQL queries use fields to select specific data that the client requests - no more data than the client is requesting each time...

# Bonus

### Made it this far? Still want more?

- Add [debounce](https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1) to the server-side search you implemented.
- Use a [scalar type](https://graphql.org/learn/schema/#:~:text=ID%3A%20The%20ID%20scalar%20type%20represents%20a%20unique%20identifier%2C%20often%20used%20to%20refetch%20an%20object%20or%20as%20the%20key%20for%20a%20cache.%20The%20ID%20type%20is%20serialized%20in%20the%20same%20way%20as%20a%20String%3B%20however%2C%20defining%20it%20as%20an%20ID%20signifies%20that%20it%20is%20not%20intended%20to%20be%20human%E2%80%90readable) for the ID properties in your graph's schema.
- Add tests to your graph server
- Add anything cool that you want! :)

## Submitting

- Submit your solution repo link - an open PR from your dev branch to the main one
- Your readme should have a [`repl.it`](https://repl.it/) link with your solutions.
- Submit a link to your repo to the CRM.

### Please if you have any questions, feel free to contact me (Koren)

GOOD LUCK!
