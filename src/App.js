import Header from './components/Header/Header'
import Home from './components/Homepage/Homepage';
import Web3 from './components/Web3/Web3';
import './App.css';
import React from 'react';
// import {Switch} from 'react-router'
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';

// import { ApolloClient, InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Home /> */}
      </div>


      <Routes>
        <Route path="personal-website/" element={ <Home />} /> 
        <Route path="/web3" element={ <Web3 />} /> 
        {/* <Route path="*" element = {} /> */}
      </Routes>

    </Router>
    
    
    // <Router>
    //   <div>
    //     {/* <Home /> */}
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={ <Home />} />
    //       <Route path="/web3" element={ <Web3 />} />
    //     </Routes>
    //   </div>
      
      
    // </Router>

    // // <BrowserRouter>
    //   <div>
    //     <Header />
    //     <Home />
    //     {/* <Link to="/web3">Web3</Link> */}
    //   </div>
    // // </BrowserRouter>
      


    
  );
}

export default App;
