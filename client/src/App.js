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
      const response = await axios.get('/test')
      setResults(response.data.msg)
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <h1>{results}</h1>
  );
}

export default App;
