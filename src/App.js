

// ---------------------props-----------------
// import React from "react";

// export default function App(){

//   let title="priya";
//   return(
//     <div>
//       <div>HELLO WOLRD</div>
//       <h2>{title}</h2>
//     </div>
//   )
// };



// ---------------------use State Hook----------------------


import React,{useState} from "react";

const Result= ()=>{
  const [marks, setMarks]= useState(80);
  const [name, setName]=useState("priya");
  return(
    <>
    <h1>My marks is {marks}</h1>
    <h2>My name is {name}</h2>
    <button onClick={()=>{
      setMarks(85)
      setName("Vishal")

    }}> Update</button>
    
    </>
  )
}
export default Result;