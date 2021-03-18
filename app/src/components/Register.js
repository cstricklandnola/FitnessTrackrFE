import React, { useState } from "react";

const Register = (props) => {
  const [user, setUser] = useState("");

  const { setAuthorized } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log (user.username)
    console.log (user.password)
    fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username: user.username,
          password: user.password})
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.success) {
          alert("Registered.");
          setAuthorized(result.data.token);
        } else {
          alert("There was an error creating your account.");
        }
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Registration:</h1>
      <label>Username:</label>
      <input
        name="Username"
        required
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label>Password:</label>
      <input
        type="password"
        required
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Register;
