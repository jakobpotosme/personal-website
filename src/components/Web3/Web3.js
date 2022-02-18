import { useQuery,gql} from "@apollo/client";
// import Wallet from "./Wallet/Wallet";

// const EXAMPLE = gql`
//     query Example {
//   attributes(first: 5) {
//     id
//     _tokenIds
//     collection {
//       id
//     }
//     metadata {
//       id
//     }
//   }
//   collections(first: 5) {
//     id
//     _attributeIds
//     _listingIds
//     _missingMetadataIds
//   }
// }
// `;

const EXAMPLE2 = gql`
  query FloorPriceTest {
  collections(first: 50) {
    id
    address
    name
    totalListings
    floorPrice
  }
}
`;

// {
//   collection(id: "0x6325439389e0797ab35752b4f43a14c004f22a9c") {
//     listings(first: 10, orderBy: pricePerItem, orderDirection: desc, where: {status: Sold, blockTimestamp_gt: 1639548000}) {
//       tokenName
//       blockTimestamp
//       nicePrice
//       transactionLink
//     }
//   }
// }

// function Example({}){

//     const {loading,error,data} = useQuery(EXAMPLE);

//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;

//     return (
//         <div>
//             {data.attributes.map(c => (
//                 <div>
                    
//                     <div>{c.id}</div>
//                     <div>{c.collection.id} </div>
//                 </div>
                
//             ))}
//         </div>
//     )

// }

function Example2(){

    const {loading,error,data} = useQuery(EXAMPLE2);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            {data.collections.map(collection => (
                <div>
                    
                    <div>{collection.id}</div>
                    <div>{collection.address} </div>
                    <div>{collection.name} </div>
                    <div>{collection.totalListings} </div>
                    <div>{collection.floorPrice} </div>
                </div>
                
            ))}
        </div>
    )

}


// function ExchangeRates() {
//   const { loading, error, data } = useQuery(gql`
//     {
//       rates(currency: "USD") {
//         currency
//         rate
//       }
//     }
//   `);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ currency, rate }) => (
//     <div key={currency}>
//       <p>
//         {currency}: {rate}
//       </p>
//     </div>
//   ));
// }

export default function Web3() {
    return (
    <div>
        <h1>COMING SOON</h1>   
        {/* <Example2 /> */}
        <button class="enableEthereumButton">Enable Ethereum</button>
        {/* <Wallet /> */}
        {/* <ExchangeRates />  */}
    </div>
    );
}