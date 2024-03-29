import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./LoginScreen.css";
import { auth, signInWithGoogle } from "../Fire";
import { useHistory } from "react-router";
import logo from '../logo.png'
function LoginScreen() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const login = async() => {

  await  auth
      .signInWithEmailAndPassword(email, pass)
      .then((res) => {
      
        history.push("/");
      })
      .catch((err) => {
       alert(err.message)
      });
  };
  return (
    <div>
    <div className="LoginMain" style={{display:"flex", flexDirection:"column"}}>
    <img
    style={{height:150, marginBottom:30}}
    src={logo}
    />
    <div className="LoginCard">
    <div className="header">
    <p className="font">Welcome Back</p>
    </div>
    <div className="input">
    <TextField
    variant="outlined"
    label="email"
    type="email"
    value={email}
    onChange={(val) => {
      setEmail(val.target.value);
    }}
    />
    </div>
    
    <div className="input">
    <TextField
    variant="outlined"
    label="password"
    type="password"
    value={pass}
    onChange={(val) => {
      setPass(val.target.value);
    }}
    />
    </div>
   
    
    <div className="button">
    <Button
    type="submit"
    variant="outlined"
    onClick={() => {
      login()
    }}
    >
    Login
    </Button>
    </div>
  
    {/*<div
    className="googleLogin"
    onClick={() => {
      signInWithGoogle(history);
    }}
    >
    <Button variant="outlined">Continue with google</Button>
  </div>*/}
    <div className="signUp">
    <p>Don't have an account?</p>
    
    <p
    onClick={() => {
      history.push("/signup");
    }}
    className="signUpText"
    >
    Sign up
    </p>
    </div>
    </div>
    </div>
  
    </div>
  );
}

export default LoginScreen;
