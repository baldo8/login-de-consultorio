import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function App() {
  const { loginWithPopup, loginWithRedirect, logout, getAccessTokenSilently, user, isAuthenticated } =
    useAuth0();


  function callApi() {
   axios.get("http://localhost:4000/")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  async function callProtectedApi() {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:4000/authorized", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
    /* console.log(token); */
   /* axios.get("http://localhost:4000/protected")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    }); */
  }


  

return (
  <div className="App">
    <h1> Auth0 Login </h1>
    <h3>{isAuthenticated ? 
    <ul>
    <li>
        <button onClick={() => logout()}>Logout</button>
    </li> 
    <li>
    <button onClick={() => callProtectedApi()}>
      call protected api route
    </button>
    </li>
    <li>
    <button onClick={() => callApi()}>
      call API route
    </button>
    </li>
    </ul>
    :
     <ul>
      <li>
        <button onClick={() => loginWithPopup()}>Login with popUp</button>
      </li>
      <li>
        <button onClick={() => loginWithRedirect()}>
          Login with Redirect
        </button>
      </li>
      <li>
    <button onClick={() => callProtectedApi()}>
      call protected api route
    </button>
    </li>
    <li>
    <button onClick={() => callApi()}>
      call API route
    </button>
    </li>
    </ul>}
    </h3>
    {isAuthenticated && (
      console.log(user),
      <div>
       <img src={user.picture} alt={user.name} />
       <h2>{user.name}</h2>
       <p>{user.email}</p>
     </div>
    )}
  </div>
);}
export default App;
