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
const SignUp = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom component="div">
          Sign in
        </Typography>
        <hr style={{width: "20%", marginLeft: "0"}}/>
        <form>
          <TextField
            style={{ width: "100%" }}
            id="filled-basic"
            label="Username"
            variant="filled"
          />
          <TextField
            style={{ width: "100%" }}
            id="filled-basic"
            label="Create Pasword"
            type="password"
            variant="filled"
          />
          <TextField
            style={{ width: "100%" }}
            id="filled-basic"
            label="Confirm Password"
            type="password"
            variant="filled"
          />
          <h1></h1>
          <CardActions>
            <Button style={{ width: "100%" }} type="submit">
              Sign-Up
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
    
  );
};

export default SignUp;
