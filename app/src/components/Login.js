import React, { useState } from "react";
import { storeToken } from "../auth";

const Login = (props) => {
  const [user, setUser] = useState("");
  const { setAuthorized, setCurrentUser, currentUser, loggedIn, setLoggedIn } = props;

  function helperHandleSubmit(e) {
    setUser({ ...user, password: e.target.value });
    setCurrentUser(user.username);
    /* console.log(currentUser); */
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: user.username, password: user.password }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.message === "you're logged in!") {
          alert("Logged in.");
          setAuthorized(result.token)
          setLoggedIn(result.token)
          storeToken(result.token);
        } else {
          alert("Failed to login.");
          
        }
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Login:</h1>
      <label>Username:</label>
      <input
        name="Username"
        required
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label>Password:</label>
      <input type="password" required onChange={(e) => helperHandleSubmit(e)} />
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
