import React, {useState} from 'react';
import {ethers} from 'ethers';

const Wallet = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount,setDefaultAccount] = useState(null)
    const [userBalance,setUserBalance] = useState(null)
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () =>{
        if (window.ethereum){
            // metamask is here

            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result =>{
                accountChangedHandler(result[0]);
            })

        } else{
            setErrorMessage('Install MetaMask');
        }
    }

    const accountChangedHandler = (newAccount) =>{
        setDefaultAccount(newAccount)
        getUserBalance(newAccount.toString())
    }

    const getUserBalance = (address) =>{
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
        .then(balance =>{
            setUserBalance(ethers.utils.formatEther(balance))
        })
    }

    const chainChangedHandler = () =>{
        window.location.reload();
    }

    window.ethereum.on('accountChanged', accountChangedHandler);
    window.ethereum.on('chainChanged', chainChangedHandler );

  return (
    <div class='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full pt-10' >
        {/* <h4>{"Connection to MetaMask using window.ethereum methods"} </h4> */}
        <button onClick={connectWalletHandler} > {connButtonText} </button>
        <div >
            <h3> Address: {defaultAccount}</h3>
        </div>
        <div>
            <h3> Balance: {userBalance}</h3>
        </div>

        {errorMessage}

    </div>
  )
}

export default Wallet