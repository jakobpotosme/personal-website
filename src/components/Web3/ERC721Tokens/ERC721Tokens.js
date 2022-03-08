import React, {useState,useEffect} from 'react'
import { useQuery,gql, useLazyQuery} from "@apollo/client";
import {ethers} from 'ethers';
import axios from 'axios';
import ArbitrumTokens from './ArbitrumTokens';
import Web3Header from '../../Header/Web3';

window.userAccount = ''

const LoginwithEth = () =>{
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount,setDefaultAccount] = useState(null)
  const [userBalance,setUserBalance] = useState(null)
  const [connButtonText, setConnButtonText] = useState('Connect Wallet')

  const connectWalletHandler = () =>{
        if (window.ethereum){
            // metamask is here

            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result =>{
                accountChangedHandler(result[0]);
                window.userAccount = result[0];
            })

        } else{
            setErrorMessage('Install MetaMask');
        }
    }


  const accountChangedHandler = (newAccount) =>{
        setDefaultAccount(newAccount)
        
    }
  
  const chainChangedHandler = () =>{
      window.location.reload();
  }

  window.ethereum.on('accountChanged', accountChangedHandler);
  window.ethereum.on('chainChanged', chainChangedHandler );

  return (
    <div>
      <Web3Header />
      <div class='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full pt-10' >
          {/* <h4>{"Connection to MetaMask using window.ethereum methods"} </h4> */}
          <button class="px-6 py-2 bg-theme text-white font-bold" onClick={connectWalletHandler} > {connButtonText} </button>
          <div >
              <label class="text-white block mb-6 text-xl font-bold">Address: {defaultAccount}</label>
              {/* <h3> Address: {defaultAccount}</h3> */}
          </div>

          {errorMessage}

      </div>

      {defaultAccount && <ERC721Tokens address = {defaultAccount} />}

    </div>
    
    
  )
}


const ERC721Tokens = ({address}) => {
  
    const [tokenData, setTokenData] = useState([])
    const [smolId, setSmolId] = useState("")

    
    // Get list of tokens from arbitrum address
    useEffect( () =>{
        axios.get(`https://api.arbiscan.io/api?module=account&action=tokennfttx&address=${address}&startblock=0&endblock=999999999&sort=asc`)
        .then(res =>{
          console.log(res.data.result)
          setTokenData(res.data.result)
          
        })
        .catch(error =>{
            console.log(error)
        })
    }, [] );

    const key = 'tokenID'
    const filteredTokenData = [...new Map(tokenData.map(item => [item[key], item])).values()]


    
    return (
      <div>
        {/* <Web3Header /> */}
        {/* <Wallet /> */}
        <div class="text-white block mb-6 text-2xl font-bold text-center py-6">
          <label >Arbitrum NFT's</label>
          <p class=" text-sm mt-6 text-gray-400">Working on gathering metadata...</p>
        </div>
          
          <div class="grid gap-4 grid-cols-3 grid-rows-3 ">
          {/* // <div > */}
            {filteredTokenData.map(token =>{
          
              if ( token.tokenName === "Smol Brain"){
                  console.log(token.tokenName)
              }
              return(
                <div>
                  
                <ArbitrumTokens 
                  key={token.tokenID}
                  id = {token.tokenID}
                  name = {token.tokenName}
                  contractAddress = {token.contractAddress}
                />
                </div>
                  

                
                
              )
            })}

          </div>
      </div>
    
  )
}

export default LoginwithEth