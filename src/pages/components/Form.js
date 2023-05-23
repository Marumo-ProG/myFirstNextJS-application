import { useState } from "react";
import { Grid, Container, Button, TextField } from "@mui/material";

const Form = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  const handleShowForm = () => {
    setIsShowForm(true);
  };
  const handleCancel = () => {
    setIsShowForm(false);
  };
  return (
    <Grid container sapcing={2} flex={1}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          maxWidth="sm"
        >
          {isShowForm == false ? (
            <Button onClick={handleShowForm}>Open Form</Button>
          ) : (
            <>
              <TextField
                
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <Button onClick={handleCancel}>Cancel</Button>
              <Button style={{ width: "100%" }}>Submit</Button>
            </>
          )}
        </Container>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Form;
