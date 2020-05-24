import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  const [results, setResults] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    setLoading(true);

    try {
      const response = await axios.post("/users/login", {
        email,
        password,
      });
      setResults(response.data.user.name);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    getResults();
  };
  return (
    <div>
      <h1>Login and Welcome My Friends</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          id="email"
          required
        />
        <label for="email">Email address</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
          id="password"
          required
        />
        <label for="password">Password</label>
        <button type="submit">Login</button>
      </form>

      {loading ? <div>Loading results...</div> : <h1>{results}</h1>}
    </div>
  );
}
