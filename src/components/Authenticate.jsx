import { useState } from "react";

function Authenticate({token, setIsSignedIn, setData}) {

  const [message, setMessage] = useState(``);

  const authenticateToken = async() => {
    try {
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`,
      {
        method: `GET`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`
        }
      });
      const json = await response.json();

      setMessage(json.message);

      if(json.success) {
        setIsSignedIn(true);
        setData(json.data);
      }

    }
    catch(error) {
      console.error(`Error occured!\n----------------\n`, error);
    }
  }
  return (
    <>
      <h2>Authorize website</h2>
      <button onClick={authenticateToken}>Authenticate</button>
      {
        message === `jwt must be provided` ?
        <p><strong>Please sign in!</strong></p>
        :
        <p>{message}</p>
      }
      
    </>
  )
}

export default Authenticate;