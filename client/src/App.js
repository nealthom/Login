import React,{useState,useEffect} from 'react';
import axios from 'axios'

import './App.css';

function App() {
  const [results, setResults] = useState('')

  useEffect(()=>{
    getResults()
  },[])
  const getResults = async () =>{
    try {
      const response = await axios.post('/users',{
        name:"Roger",
	      email:"RogerPenrose@gmail.com",
	      password:"AmandaRandaKanda"
      })
      console.log(response.data.user)
      setResults(response.data.user.name)
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <h1>{results}</h1>
  );
}

export default App;
