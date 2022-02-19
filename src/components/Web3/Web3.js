import { useQuery,gql} from "@apollo/client";
import Wallet from "./Wallet/Wallet";
import Smolbrain from "./Smolbrain/Smolbrain"


export default function Web3() {
    return (
    <div >
        {/* <h1 >COMING SOON</h1>    */}
        <Wallet />
        <Smolbrain />
        
    </div>
    );
}