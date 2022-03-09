import React from 'react'

const OpenseaTokens = ({name,image,key,description,address, floorPrice, link}) => {
  return (
    <div>
        <div class=" bg-input rounded-lg hover:bg-zinc-500 py-2 h-96">

            <div className='token-name' class="container text-xl flex-col text-center mt-6 mb-2">
              <h1> {name}  - </h1>  
            </div>
            
            <div className='token-info' class="container text-center mb-12 " >
              
              {/* <p>{address}</p> */}
              {/* <p>{floorPrice}</p> */}
              <div class="grid">
                <img class="w-1/3 place-self-center mb-6 " src = {image} alt="nft" />
                
              </div>
              <a  href='${link}'>{link}</a>
              
            </div>
            
          </div>

    </div>
  )
  
}

export default OpenseaTokens