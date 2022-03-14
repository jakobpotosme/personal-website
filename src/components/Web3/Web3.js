import { useQuery,gql} from "@apollo/client";
import Wallet from "./Wallet/Wallet";
import Smolbrain from "./Smolbrain/Smolbrain"
import Search from "./Prices/Search";
import Web3Header from "../Header/Web3"
import Footer from "../Footer/Footer";
import Web3Cards from "./Web3Cards/Web3Cards";
import gallery from "../../image/gallery (2).png"
import coins from "../../image/coins.png"
import treasure from "../../image/treasure.png"

export default function Web3() {
    return (
    <div >
        {/* <h1 >COMING SOON</h1>    */}
        <Web3Header />
        {/* <Wallet /> */}
        {/* <Smolbrain /> */}
        {/* <Web3Cards /> */}
        <div>
            <h1 class="text-center text-4xl mt-6 mb-20 font-semibold">Welcome to the Web3 Hub</h1>
        </div>

        <div class="grid grid-cols-1 gap-y-14  ">

            {/* NFT COLLECTION */}
            <div className="nft-collection" class="flex grid grid-cols-2 mt-12 px-20 gap-x-0 ">
                <div className="side-image" class="  mx-auto  items-center">
                    
                    <img src={gallery} alt="collection" />
                </div>
                <div className="text-col ">
                    <h1 class="text-left text-xl mt-3 font-semibold text-blue-500" >NFT Collection</h1>

                    <h3 class="text-left text-4xl mt-6 font-semibold ">View your digital assets</h3>
                    <p class="text-left text-xl mt-6 font-normal text-neutral-400 ">Here you will be able to view what you own accross the Ethereum and Arbitrum Chain!</p>
                    <button class="rounded-lg px-6 py-2 outline outline-blue-500 hover:bg-blue-600 text-white font-bold mt-6 "> <a href="/collection">View</a> </button>
                </div>
            </div>

            {/* TREASURE STATS */}
            
            <div className="nft-collection" class="flex grid grid-cols-2 mt-12 px-20 gap-x-0  md:pl-60 xl:pl-96 xl:ml-32">
                
                <div className="text-col" class=" mx-4 ">
                    <h1 class="text-left text-xl mt-3 font-semibold text-blue-500" >Treasure Stats</h1>

                    <h3 class="text-left text-4xl mt-6 font-semibold ">Track the Treasure Ecosystem </h3>
                    <p class="text-left text-xl mt-6 font-normal text-neutral-400 ">Stay up to date with the best WEB3 community built on the L2 Arbitrum Network !</p>
                    <button class="rounded-lg px-6 py-2 outline outline-blue-500 hover:bg-blue-600 text-white font-bold mt-6 "> <a href="/arbitrum">Track</a> </button>
                </div>
                <div className="side-image" class=" pl-20">
                    
                    <img src={treasure} alt="treasure" />
                </div>
            </div>
            
            {/* Coin Data */}
            <div className="nft-collection" class="flex grid grid-cols-2 mt-12 px-20 gap-x-0  ">
                <div className="side-image" class="  mx-auto  items-center">
                    
                    <img src={coins} alt="coins" />
                </div>
                <div className="text-col ">
                    <h1 class="text-left text-xl mt-3 font-semibold text-blue-500" >Coin Information</h1>

                    <h3 class="text-left text-4xl mt-6 font-semibold ">Live Coin Data</h3>
                    <p class="text-left text-xl mt-6 font-normal text-neutral-400 ">Curious of current coin price action? No need click here!</p>
                    <button class="rounded-lg px-6 py-2 outline outline-blue-500 hover:bg-blue-600 text-white font-bold mt-6 "> <a href="/coins">View</a> </button>
                </div>
            </div>

        </div>
        
        <Footer />
        {/* <Search /> */}
        
    </div>
    );
}