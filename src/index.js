import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";

const client = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // uri: 'https://api.thegraph.com/subgraphs/name/wyze/treasure-marketplace',
  // uri: 'https://api.thegraph.com/subgraphs/name/wyze/treasure-marketplace',
  uri: 'https://api.thegraph.com/subgraphs/name/treasureproject/smolverse',
  cache: new InMemoryCache()
})

ReactDOM.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <App />

  </ApolloProvider>
    
  /* </React.StrictMode> */
  ,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
