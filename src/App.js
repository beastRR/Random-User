import './App.css';
import React from "react";
import Axios from "axios";
import {useState, useEffect} from "react";
import UserCard from './UserCard';

function App() {
  const [detail, setDetail]= useState({});
  const fetchApi = async()=>{
    const {data} = await Axios.get("https://randomuser.me/api/");//destructuring data property instead of doing res.data
    const detail=data.results[0];
    setDetail(detail);
    console.log(data);

    // return data.results[0];
  }

  useEffect(()=>{
    fetchApi();
    
    // setDetail()

  },[]);

  // setTimeout(()=>{console.log(detail.gender)},5000) ;

  return (
    <div> 
      <h1 className='text-center  title'>Random User Generator</h1>
      <UserCard data={detail}/>
    </div>
  )
  }

export default App;
