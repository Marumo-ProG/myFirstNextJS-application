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
  import {useState} from 'react';
  const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = () => {
        // confiming there is something in the input boxes
        if(username && password){
            // checking if the username is available in the database and matches the password
        }else{
            alert("Please type something in the input boxes")
        }
    }
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom component="div">
            Login
          </Typography>
          <hr style={{width: "20%", marginLeft: "0"}}/>
          <form>
            <TextField 
                onChange={handleUsername}
              style={{ width: "100%" }}
              id="filled-basic"
              label="Username"
              variant="filled"
            />
            <TextField
                onChange={handlePassword}
              style={{ width: "100%" }}
              id="filled-basic"
              label="Password"
              type="password"
              variant="filled"
            />
            <h1></h1>
            <CardActions>
              <Button style={{ width: "100%" }} type="submit">
                Login
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
      
    );
  };
  
  export default Login;
  