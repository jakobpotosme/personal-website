import axios from 'axios'
import React, { useEffect, useState } from 'react'

const OpenseaTokens = ({name,image,key,description,address, link, slug}) => {

  // have access to slug, just get the floor price via request
  const [collectionStats, setCollectionStats] = useState([])

  useEffect( () =>{

    axios.get(`https://api.opensea.io/api/v1/collection/${slug}/stats`)
    .then(res =>{
      console.log(res.data)
      setCollectionStats(res.data)
    })
    .catch(error =>{
      console.log(error)
    })


  }, [])

  // const filteredCollectionStats = collectionStats.filter(collection => collection.stats.floor_price)

  // console.log(filteredCollectionStats)

  return (
    <div>
        <div class=" bg-input rounded-lg hover:bg-zinc-500 pt-2 h-auto md:h-60 xl:h-96">

            <div className='token-name' class="container text-xl flex-col text-center ">
              <h1> {name} </h1>  
            </div>
            
            <div className='token-info' class="container text-center xl:mb-12 " >
              
              {/* <p>{address}</p> */}
              {/* <p>{floorPrice}</p> */}
              <div class="grid grid-cols-1 gap-y-6">
                <img class="w-1/3 place-self-center pt-2 " src = {image} alt="nft" />
                {/* <img class=" h-48 place-self-center mb-6 w-full object-cover md:h-full md:w-48" src = {image} alt="nft" /> */}
                <p>Floor Price: {collectionStats.stats.floor_price}</p>
                <a href={`${link}`}> <p class="break-words">{link}</p></a>  
              </div>
              
              
              
            </div>
            
          </div>

    </div>
  )
  
}

export default OpenseaTokens