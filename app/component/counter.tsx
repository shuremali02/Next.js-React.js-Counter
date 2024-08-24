"use client"
import { useState } from "react";
export default function Home() {
    const[count,setCount]=useState(0)
    const [decrement,setdecrement]=useState(0)
    const [StudentName,setstudentName]=useState<string[]>([])
    //const array:string[]=[]
  //let arr =StudentName.push()
   function Array(...a:string[]){
   a.push() 
   }
    return (
      <div className=" bg-slate-300 min-h-screen text-center  ">
        <br />
        <br />
        <br />
<div >
        <h1 className="flex justify-center">Counter {count} {decrement}</h1><button className="bg-red-500 text-white px-2 py-1 rounded-full " 
  onClick={(()=>{setCount(count>0?count-1:count)})}
  >Back</button>
        
  <button className="bg-blue-500 text-white px-2 py-1 rounded-full " 
  onClick={(()=>{setCount(count+1)})}
  >Increment +</button>
  <button className="bg-blue-500 text-white px-2 py-1 rounded-full"
  onClick={(()=>{setdecrement(decrement-1)})}
  >Decrement - </button>
<button className="bg-red-500 text-white px-2 py-1 rounded-full"
  onClick={(()=>{setdecrement(decrement<0?decrement+1:decrement)})}
  >Back</button>
<div className="mt-2">
<button className="bg-black text-white px-2 py-1 rounded-full "
  onClick={(()=>{setCount(0),setdecrement(0)})}>Reset</button>
  <br />
  
 
  </div>
      </div>
      <div>

      <input type="text" />
      <button className="bg-black text-white rounded-3xl" onClick={Array}> Add Data</button>


      </div>
    </div>
    );   
  }