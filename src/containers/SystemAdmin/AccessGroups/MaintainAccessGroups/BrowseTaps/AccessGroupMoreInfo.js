import { Button, Stack, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";

const AccessGroupMoreInfo = (props) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={props.show}
      onClose={props.handleClose}
    >
      <DialogTitle>Access Group More Info</DialogTitle>
      <DialogContent>
        <Grid container direction="row" spacing={0} justifyContent="left">
          <Grid item xs={4}>
            ADMIN
          </Grid>
          <Grid item xs={8}>
            System Administrator
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={0} justifyContent="left">
          <Grid item xs={4}>
            Property
          </Grid>
          <Grid item xs={8}>
            Site Services
          </Grid>
        </Grid>
        <DialogActions>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Next Page</Button>
            <Button variant="contained" onClick={props.handleClose}>
              Close
            </Button>
          </Stack>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default AccessGroupMoreInfo;
