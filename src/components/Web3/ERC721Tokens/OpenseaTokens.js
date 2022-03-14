import React from 'react'

const OpenseaTokens = ({name,image,key,description,address, floorPrice, link}) => {
  return (
    <div>
        <div class=" bg-input rounded-lg hover:bg-zinc-500 pt-2 h-auto xl:h-96">

            <div className='token-name' class="container text-xl flex-col text-center ">
              <h1> {name}  - </h1>  
            </div>
            
            <div className='token-info' class="container text-center xl:mb-12 " >
              
              {/* <p>{address}</p> */}
              {/* <p>{floorPrice}</p> */}
              <div class="grid">
                <img class="w-1/3 place-self-center  " src = {image} alt="nft" />
                {/* <img class=" h-48 place-self-center mb-6 w-full object-cover md:h-full md:w-48" src = {image} alt="nft" /> */}
                
              </div>
              <a  href='${link}'>{link}</a>
              
            </div>
            
          </div>

    </div>
  )
  
}

export default OpenseaTokens