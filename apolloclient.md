npm install @apollo/client graphql
in index.js
import {
ApolloClient,
InMemoryCache,
ApolloProvider,
useQuery,
gql
} from "@apollo/client";
const client = new ApolloClient({
uri: 'https://48p1r2roz4.sse.codesandbox.io',
cache: new InMemoryCache()
});
render(
<ApolloProvider client={client}>
<App />
</ApolloProvider>,
document.getElementById('root'),
);
