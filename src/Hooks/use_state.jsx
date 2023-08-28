
import React,{useState} from "react";

export default function Exp_useState(){
  const [age, setAge]= useState(25);

  return(
    <>
    <h1>my age is {age}</h1>
    <button onClick={()=>{
      setAge (age+1)

    }}>Increase</button>

    
    </>
  )


}