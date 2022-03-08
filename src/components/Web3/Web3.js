import { useQuery,gql} from "@apollo/client";
import Wallet from "./Wallet/Wallet";
import Smolbrain from "./Smolbrain/Smolbrain"
import Search from "./Prices/Search";
import Web3Header from "../Header/Web3"

export default function Web3() {
    return (
    <div >
        {/* <h1 >COMING SOON</h1>    */}
        <Web3Header />
        {/* <Wallet /> */}
        <Smolbrain />
        <Search />
        
    </div>
    );
}