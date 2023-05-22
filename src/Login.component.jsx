import { useState } from "react";

export const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("test");

  const changeUsername = (e) => setUsername(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={changeUsername}
        value={username}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={changePassword}
        value={password}
      />
      <button disabled={!(username && password)}>Login</button>
      <span
        data-testid="error"
        style={{ color: "red", visibility: error ? "visible" : "hidden" }}
      >
        Something went wrong!
      </span>
    </div>
  );
};
