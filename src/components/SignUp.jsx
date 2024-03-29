import { useState } from "react";

function SignUp({setToken}) {

  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);

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
      console.log(json);
      localStorage.setItem(`Token`, json.token);

    }
    catch(error) {
      console.error(`Error occured!\n----------------\n`, error);
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
      <input type="text" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Sign Up!</button>
    </form>
    </>
  )
}

export default SignUp;