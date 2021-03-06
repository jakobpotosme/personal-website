import react from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

// import Home from '../Homepage/Homepage';
export default function Web3Header() {
    return(
        
            <header class="py-6 " >
                <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full ">
                    <div class="text-2xl font-bold">Jakob Potosme</div>
                    <div class='hidden text-lg md:flex space-x-12 items-center'>
                        <Link to='/' > Home</Link> 
                        <Link to='/web3'>Web 3</Link>
                        {/* <Link to='/arbitrum'>Treasure Statistics </Link>
                        <Link to='/collection'>NFT Collection</Link> */}
                        {/* <a href="#about" >About Me</a>
                        <a href="#contact" ><button class="px-6 py-2 bg-theme font-bold">Contact Me</button></a>  */}
                    </div>
                    <div class="md:hidden">
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
                    </div>
                </div>
            </header>

        
    );
}