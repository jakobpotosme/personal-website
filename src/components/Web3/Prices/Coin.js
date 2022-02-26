import React from 'react'

const Coin = ({image,name,symbol,price,volume, priceChange, marketcap}) => {
  return (
    <div className='coin-container' class="container flex text-xl ">
        <div className='coin-row' class="flex flex-row justify-items-start items-center h-80  w-full pl-48 mx-auto xl:ml-96">
            <img src={image} alt="crypto" class=" ml-6 h-24 w-24 mx-auto " />
            <div className='coin' class="flex items-center pl-12 pr-24 text-xl  ">
                {/* <img src={image} alt="crypto" class=" ml-6 h-24 w-24 mx-auto " /> */}
                <h1 class="mr-12 mx-auto">{name}</h1>
                <p className='coin-symbol'  class="mx-auto ml-12">{symbol}</p>
            </div>
            <div className="coin-data" class="flex items-center w-full mx-auto ">
                <p className='coin-price' class="mx-auto "> ${price}</p>
                <p className='coin-volume' class="mx-auto xl:mr-12 ml-24"> ${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                                <p className="coin-percent red" class="xl:ml-12 ml-24 text-red-400">
                                    {priceChange.toFixed(2)}%
                                </p>
                            ) : (
                                <p className="coin-percent green" class="xl:ml-12 ml-24 text-green-400">
                                    {priceChange.toFixed(2)}%
                                </p>
                            )}
                <p className="coin-marketcap" class="mx-auto xl:mr-12 xl:ml-24 ml-24 mr-12 ">
                    Market Cap: {marketcap.toLocaleString()}
                </p>
            </div>
        </div>

    </div>
  )
}

export default Coin