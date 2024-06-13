import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// Importing Apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error"; // Built-in method to handle errors

//layouts
import RootLayput from "./Pages/RootLayput";

//pages
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact";

// Catch errors: (Basic idea)
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL Error ${message}`);
    });
  }
});

const link = from([
  // from is the built in library for creating a html link
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link, // Links the backend to the frontend
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ApolloProvider client={client}>
          <RootLayput />
        </ApolloProvider>
      }
    >
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
