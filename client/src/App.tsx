import "./App.css";
import { Homepage } from "./pages/Homepage";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Homepage />
      </div>
    </ApolloProvider>
  );
}

export default App;
