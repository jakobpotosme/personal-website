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

    
    let hex = parseInt(smolId).toString(16).toLowerCase()
    let SmolId = '0x6325439389e0797ab35752b4f43a14c004f22a9c-0x'+hex;
    const [fetchSmol, {called,loading, data: smolSearchedData,error: smolError}] = useLazyQuery(GET_SMOL_BY_ID, {variables: {
          id: SmolId
        }})

    if (called && loading) return 'Loading...';
    if (smolError) return `Error! ${smolError.message}`;

    if (!called){
      return <button class="px-6 py-2 bg-theme text-white font-bold" onClick={fetchSmol}>Search</button>
    }
    return (
      
      <div>
        {smolSearchedData && <div> 
          <label class="text-white block mb-6 text-xl font-bold">Smol: {smolSearchedData.token.name}</label>
          {/* <h1> Smol: {smolSearchedData.token.name}</h1>  */}
          <img class="h-180 w-96 w-3/4 mt-12 -mt-6 md:mt-0 right-0 -z-1 lg:mr-40 " src = {smolSearchedData.token.image} alt="SmolBrain" />
          </div>}
      </div>
    )
  }
  

  return (
    <div class="text-center">
      <label class="text-center text-white block mb-6 text-xl font-bold pt-20">Search your SmolBrain by ID here!</label>

      <div class='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full pt-10'>
      
        <input class="w-96 border border-input-border bg-input px-4 py-4" type="text"  placeholder="Smol ID " onChange= {(e) =>{
          setSmolId(e.target.value);
        }}
        />

        <DisplayData />
      </div>
      
      
      

    </div>
  )
}

export default Smolbrain;