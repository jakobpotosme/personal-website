import React,{useState, useEffect} from 'react'
import {ethers} from 'ethers';
import { useQuery,gql, useLazyQuery ,ApolloClient,InMemoryCache} from "@apollo/client";
import Web3Header from '../../Header/Web3'

const GET_MARKETPLACE_DATA = gql`

    query Data{
          collections(first: 15) {
            name
            contract
            floorPrice
            listings(first: 1) {
                
            token{
                id
            }
            seller {
                id
                }
            
            }
            totalListings
            totalSales
            totalVolume
        }
    }


`


const Arbitrum = () => {

    const [marketData, setMarketData] = useState([])

    const client = new ApolloClient({
    uri : 'https://api.thegraph.com/subgraphs/name/treasureproject/marketplace',
    cache: new InMemoryCache()
    })

    
    function DisplayMarketData(){


        const {loading,error,data} = useQuery(GET_MARKETPLACE_DATA, {client});

        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
    
        return (
            
            <div class="grid gap-4 grid-cols-3 grid-rows-3 ">
                { data.collections.map( collection =>(
                    <div class=" bg-input rounded-lg ">
                        <div className='collection-name' class="container text-xl flex-col text-center mt-6 mb-2">
                            <h1 >{collection.name}</h1>
                            
                            {/* <p>Collection Contract: {collection.contract}</p> */}
                        </div>
                        
                        <div className='collection-stats'  class="container text-center mb-12" >
                            {/* <p>Floor Price: {collection.floorPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> */}
                            <p class="mb-2 "> {ethers.utils.formatEther(collection.floorPrice)} $MAGIC</p> 
                            
                            <div>
                                <p>Currently Listed</p>
                                <p class="mb-2 "> {collection.totalListings}</p>
                            </div>

                            <div>
                                <p>Total Sales</p>
                                <p class="mb-2 ">{collection.totalSales}</p>
                            </div>
                            
                            <div>
                                <p class="mb-1">Total Volume</p>
                                <p >{collection.totalVolume.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </div>
                                
                        </div>
                        
                        


                    </div>   
                    
                    
                    // {collection.id}
                ))

                }
            </div>
        )
    }

  return (
    <div>
        <Web3Header />
        <h1 class="text-center text-white block mb-12 text-2xl font-bold pt-20">Treasure Related Statistics</h1>
        <DisplayMarketData />
    </div>
  )
}

export default Arbitrum