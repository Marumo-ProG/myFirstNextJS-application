import { Grid, Container, Button } from "@mui/material";
import Form from "./components/Form";
import "@fontsource/roboto"
import TaskList from "./components/TaskList"

const Home = () => {
  
  return (
    <div>
      <h4 style={{textAlign: "center",fontFamily: "roboto"}}>Welcome to Next js Task Manager</h4>
      <hr style={{width: "30%", marginLeft: "auto", marginRight: "auto", marginBottom: "20px"}}/>
      <Form />
      <h4 style={{fontFamily: "roboto"}}>Added Tasks</h4>
      <hr/>
      <TaskList />
    </div>
  );
};

export default Home;
