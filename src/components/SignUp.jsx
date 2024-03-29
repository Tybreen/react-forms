import { useState } from "react";

function SignUp({setToken, isSignedIn}) {

  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const [message, setMessage] = useState(``);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {

      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, 
      {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const json = await response.json();
      
      setToken(json.token);
      localStorage.setItem(`Token`, json.token);
      setMessage(json.message);

    }
    catch(error) {
      console.error(`Error occured!\n----------------\n`, error);
    }
  }

  return (
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)} required/>
        <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} required/>
        <button type="submit">Sign Up!</button>
      </form>
      {
        isSignedIn ? 
        <p>You are already signed in.</p> 
        :
        <p>{message}</p>
      }
      
    </>
  )
}

export default SignUp;