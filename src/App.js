import Home from './components/Homepage/Homepage';
import Web3 from './components/Web3/Web3';
import Arbitrum from './components/Web3/Arbitrum/Arbitrum';
import Test from './components/Web3/ERC721Tokens/Test'
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import ERC721Tokens from './components/Web3/ERC721Tokens/ERC721Tokens';
import Search from './components/Web3/Prices/Search';

// import { ApolloClient, InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";

function App() {
  return (
    <Router>
      {/* <div class="bg-body"> */}
        {/* <Header /> */}
        {/* <Header /> */}
      {/* </div> */}


      <Routes>
        <Route path="personal-website/" element={ <Home />} /> 
        <Route path="/web3" element={ <Web3 />} /> 
        <Route path="/arbitrum" element= { <Arbitrum />} />
        <Route path='/collection' element = { <ERC721Tokens />} />
        <Route path='/coins' element = { <Search /> } />
        {/* <Route path="*" element = {} /> */}
      </Routes>

    </Router>
    



    
  );
}

export default App;
