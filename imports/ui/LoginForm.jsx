import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import React, { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (e.target.value === "Log In") {
      Meteor.loginWithPassword(username, password);
    } else {
      Accounts.createUser({ username: username, password: password }, (e) => {
        if (!e) {
          Meteor.loginWithPassword(username, password);
        }
      });
    }
  };

  return (
    <form onSubmit={submit} className="login-form">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
};
