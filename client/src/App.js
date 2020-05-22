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
      const response = await axios.post('/users/login',{
	      email:"admin@admin.com",
	      password:"machineadmin"
      })
      console.log(response.data.user)
      setResults(response.data.user.name)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form>
      <input type='email' placeholder='email' id='email' required />
      <label for='email'>Email address</label>
      <input type='password' placeholder='password' id='password' required />
      <label for='password'>Password</label>
      <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
