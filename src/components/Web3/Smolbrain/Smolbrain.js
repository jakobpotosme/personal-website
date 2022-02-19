import React, {Component, useState} from 'react'
import { useQuery,gql, useLazyQuery} from "@apollo/client";


const GET_SMOL_BY_ID = gql`
   query Token($id: String!) {
    token(id: $id) {
      name
      image
  }
}

`;




function Smolbrain() {

  const [smolId, setSmolId] = useState("")

  function DisplayData(){

    let temp = '0x6325439389e0797ab35752b4f43a14c004f22a9c-'+smolId.toLowerCase();
    const [fetchSmol, {called,loading, data: smolSearchedData,error: smolError}] = useLazyQuery(GET_SMOL_BY_ID, {variables: {
          id: temp
        }})

    if (called && loading) return 'Loading...';
    if (smolError) return `Error! ${smolError.message}`;

    if (!called){
      return <button onClick={fetchSmol}>Search</button>
    }
    return (
      <div>
        {smolSearchedData && <div> <h1> Smol: {smolSearchedData.token.name}</h1> <img src = {smolSearchedData.token.image} alt="SmolBrain" /> </div>}
      </div>
    )
  }
  

  return (
    <div class='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full pt-10'>

      <h1>Smolbrain</h1>
      
      <input type="text" style={{color: "black"}} placeholder="Smol ID in Hex" onChange= {(e) =>{
        setSmolId(e.target.value);
      }}
      />

      <DisplayData />

    </div>
  )
}

export default Smolbrain;