import {useState,useEffect} from "react";
export default function  MyInteractiveComponent(){
const [data, setData] = useState()

  useEffect(()=>{
    fetch('/api/home')
    .then((response)=>response.json())
    .then((data) => setData(data))
  },[]);
  return (
    <div>
    <h1>Server Status</h1>
    <p>{data}</p>
    </div>
  )
};
