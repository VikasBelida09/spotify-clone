import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";
import { useStateValue } from "../../Context/StateProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            id=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button
            onClick={signUp}
            type="submit"
            className="login__signUpButton"
          >
            Create Your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
