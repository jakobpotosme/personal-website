import Header from './components/Header/Header'
import Home from './components/Homepage/Homepage';
import Web3 from './components/Web3/Web3';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';

// import { ApolloClient, InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";

function App() {
  return (
    <Router>
      <div class="bg-body">
        <Header />
      </div>


      <Routes>
        <Route path="personal-website/" element={ <Home />} /> 
        <Route path="/web3" element={ <Web3 />} /> 
        {/* <Route path="*" element = {} /> */}
      </Routes>

    </Router>
    



    
  );
}

export default App;
