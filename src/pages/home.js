import "@fontsource/roboto";
import SignUp from "./components/SignUp"
import { Typography, Grid, Container, Link, Button } from "@mui/material";
const Home = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontFamily: "roboto" }}>
        Welcome to Next js Task Management System
      </h2>
      <hr style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}/>
      <Container style={{width: "70%"}}>
        <SignUp />

        <div className="bottom-nav">
          <Button>SignUp</Button>
          <Button>login</Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
