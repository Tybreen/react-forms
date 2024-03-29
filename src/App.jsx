import { useEffect, useState } from 'react';
import './App.css'
import Authenticate from './components/Authenticate';
import SignUp from './components/SignUp';

function App() {

  const [token, setToken] = useState(``);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem(`Token`);
    if(localToken) {
      setToken(localToken);
    }
  }, []);
  
  return (
    <>
      <h1>React forms</h1>

      
      {
        isSignedIn ?
        <section id="welcome">
          <h1> Welcome! Thanks for signing up!</h1>
          <h3>Here's your data</h3>
          <p>Your username: {data.username}</p>
          <p>{data.iat}</p>
        </section>
        :
        <>
          <SignUp setToken={setToken} isSignedIn={isSignedIn}/>
          <Authenticate token={token} setIsSignedIn={setIsSignedIn} setData={setData}/>
        </>
      }
    </>
  )
}

export default App;