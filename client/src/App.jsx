import React from "react";
import { useState } from "react";
import axios, { Axios } from "axios"

export default function App() {

  const [getVal,setVal] = useState(0);
  const [getURL,setURL] = useState("");

  const getImage = async()=>{

    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    setURL(res.data.message);

  }

  return (
    <div>
      <h1>Vercel Test</h1>
        <h2> VAR : {import.meta.env.VITE_VAR} </h2>
      <div> <button onClick={()=>{setVal(getVal - 1)}} >-</button> {getVal} <button onClick={()=>{setVal(getVal + 1)}} >+</button> </div>
      <button onClick={getImage} >Get Image</button>
      <img style={{display:"block"}} src={getURL} alt="NO_IMAGE" />

    </div>
  );
}
