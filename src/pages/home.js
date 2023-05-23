import "@fontsource/roboto";
import SignUp from "./components/SignUp";
import Login from "./components/Login"
import {useState, Context} from "react";
import { Typography, Grid, Container, Link, Button } from "@mui/material";
const Home = () => {
  const [show,setShow] = useState("signup");
  const handleShowLogin = () =>{
    setShow("login");
  }
  const handleShowSignup = () =>{
    setShow("signup");
  }
  return (
    <div>
      <h2 style={{ textAlign: "center", fontFamily: "roboto" }}>
        Welcome to Next js Task Management System
      </h2>
      <hr style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}/>
      <Container style={{width: "70%"}}>
        {show=="signup" ? <SignUp /> : <Login />}
        <div className="bottom-nav" style={{position: "absolute"}}>
          {show=="login" ? <Button onClick={handleShowSignup}>SignUp</Button> : <Button style={{borderBottom: "2px solid blue"}} onClick={handleShowSignup}>SignUp</Button> }
          {show=="signup" ? <Button onClick={handleShowLogin}>login</Button> : <Button style={{borderBottom: "2px solid blue"}} onClick={handleShowLogin}>login</Button> }
        </div>
      </Container>
    </div>
  );
};

export default Home;
