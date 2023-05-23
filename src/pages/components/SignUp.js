import {
  Card,
  Typography,
  CardActionArea,
  CardActions,
  CardContent,
  bottomNavigationAction,
  TextField,
  Button,
  BottomNavigation,
} from "@mui/material";
import { useState } from "react";
const SignUp = () => {
  const [username, setUserName] = useState("");
  const [cPassword, setCPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleFirstPassword = (e) => {
    setCPassowrd(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // checking if the username exists in the database
    if (username && cPassword && confirmPassword) {
      console.log("checking if the username exists in the database or not");
      if (cPassword === confirmPassword) {
      } else {
        alert("Passwords dont match, Please confirm the passwords");
      }
    }else{
        alert("Please fill in all the input areas")
    }
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom component="div">
          Sign in
        </Typography>
        <hr style={{ width: "20%", marginLeft: "0" }} />
        <form>
          <TextField
            onChange={handleUsername}
            style={{ width: "100%" }}
            id="filled-basic"
            label="Username"
            variant="filled"
          />
          <TextField
            onChange={handleFirstPassword}
            style={{ width: "100%" }}
            id="filled-basic"
            label="Create Pasword"
            type="password"
            variant="filled"
          />
          <TextField
            onChange={handleConfirmPassword}
            style={{ width: "100%" }}
            id="filled-basic"
            label="Confirm Password"
            type="password"
            variant="filled"
          />
          <h1></h1>
          <CardActions>
            <Button
              onClick={handleSubmit}
              style={{ width: "100%" }}
              type="submit"
            >
              Sign-Up
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUp;
