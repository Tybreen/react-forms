function Authenticate({token}) {

  const authenticateToken = async() => {
    console.log(token);
    const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`,
    {
      method: `GET`,
      headers: {
        "Content-Type": `application/json`,
        Authenticate: `Bearer ${token}`
      }
    });
    const json = await response.json();
    console.log(json);
  }

  return (
    <>
      <button onClick={authenticateToken}>Authenticate</button>
    </>
  )
}

export default Authenticate;