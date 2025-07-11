"use client";

import { useAuth } from "../context/AuthContext";
import { FormEvent, useState } from "react";

const Login = () => {
  const { loggedIn, login } = useAuth();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(name, password);
    setPassword("");
    
  };

  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <p>{loggedIn ? `User logged in: ${name}` : "Please login"}</p>

        {/* Display form only if not logged in */}
        {!loggedIn && (
          <form onSubmit={onSubmitHandler}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter username"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        )}

        {loggedIn && <p>Welcome, {name}!</p>}
      </div>
    </>
  );
};

export default Login;
