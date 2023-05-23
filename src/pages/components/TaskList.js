import {List, ListItem, ListItemText, ListItemButton} from "@mui/material";
const TaskList = () => {
    return(
        <List style={{backgroundColor: "blue"}}>
            <ListItem >
                <ListItemButton style={{backgroundColor: "#999"}}> 
                    <ListItemText primary="Code" />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton style={{backgroundColor: "#999"}}> 
                    <ListItemText primary="Eat Break-fast" />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default TaskList;