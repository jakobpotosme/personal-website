import React from 'react'

const ArbitrumTokens = ({name,contractAddress,id}) => {
  return (
    <div>
        <div class=" bg-input rounded-lg hover:bg-zinc-500 py-2 ">

            <div className='token-name' class="container text-xl flex-col text-center mt-6 mb-2">
              <h1> {name}  - {id}</h1>  
            </div>
            
            <div className='token-info' class="container text-center mb-12" >
              <p>{contractAddress}</p>
            </div>
            
          </div>

    </div>
  )
}

export default ArbitrumTokens