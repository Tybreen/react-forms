import { useEffect, useState } from 'react';
import './App.css'
import Authenticate from './components/Authenticate';
import SignUp from './components/SignUp';

function App() {

  const [token, setToken] = useState(``);
  const [isSignedIn, setIsSignedIn] = useState(false);

  /* useEffect(() => {
    const localToken = localStorage.getItem(`Token`);
    if(localToken) {
      setToken(localToken);
    }
  }, []); */

  return (
    <>
      <h1>React forms</h1>

      <SignUp setToken={setToken}/>
      <p>{token}</p>
      <Authenticate token={token}/>
      {
        isSignedIn ? <p>Signed in</p> : <p>NOT signed it</p>
      }
    </>
  )
}

export default App;