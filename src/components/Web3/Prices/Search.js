import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Coin from './Coin';
import Web3Header from '../../Header/Web3';

const Search = () => {
  
    const [coins,setCoins] = useState([])
    const [search,setSearch] = useState("")

    useEffect( () =>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res =>{
            setCoins(res.data)
            console.log(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }, []);
  
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }
    
    const filteredCoins = coins.filter( coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        )

    return (
    <div >
        <Web3Header />
        <div class=" ">
            <label class="text-center text-white block mb-6 text-xl font-bold pt-20 ">Search a Currency</label>
            {/* <p class="section-paragraph text-lg text-white text-center block xl:ml-96">Coins from top 100</p> */}
            <label class="text-center block text-gray-400/75" >Top 100 Coins</label>
        </div>
    
        
        <div class='container justify-between items-center mx-auto px-8  lg:px-80 xl:px-24 w-full pt-10'>
            
            <input class="w-96 border border-input-border bg-input px-4 py-4 ml-12" type="text"  placeholder="Ex: Bitcoin " onChange={handleChange} />

            {
            filteredCoins.map(coin =>{
                return(
                    <Coin 
                    key={coin.id} 
                    name={coin.name} 
                    image = {coin.image}
                    symbol = {coin.symbol}
                    marketcap = {coin.market_cap}
                    price = {coin.current_price}
                    priceChange = {coin.price_change_percentage_24h}
                    volume = {coin.total_volume}
                    />
                )
            })
        }
        </div>
        
        
        

    </div>
  )
}

export default Search