import 'bootstrap/dist/css/bootstrap.min.css';

import "./Home.css"

import { Routes,Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import Book from "./Book"
import Hotel from "./Hotel";


export default function Apps(){
  return ( <div>

    <BrowserRouter>
<Routes>

<Route path="/" element={<Home/>}/>










  


  <Route path="Hotel" element={<Hotel/>}/>



  <Route path="/Book" element={<Book/>}/>











</Routes>
</BrowserRouter>
  </div>)
}





















/*                                        صفحه جديد بأسم Alldata               
export function Data(props){
  return <div><h1>{props.name}</h1></div>
}
*/


/*                                              صفحه تابعه ل Alldata 
                            تستخدم هذه الصفح ل جلب بيانات من خلال الباك اند داخل الموقع

import  { useEffect, useState } from "react";
import { Data } from "./Components/Alldata";

export default function App(){

  const[data,setData]=useState([])

const dataShow= data.map((e,index)=> <Data name={e} key={index} />)


useEffect(()=>{
  fetch("https://www.balldontlie.io/api/v1/teams")
  .then((res)=> res.json())
  .then((data) =>setData(data.data.map((e)=> e.name)))
},[])



return(<div>{dataShow}</div> )

}
*/