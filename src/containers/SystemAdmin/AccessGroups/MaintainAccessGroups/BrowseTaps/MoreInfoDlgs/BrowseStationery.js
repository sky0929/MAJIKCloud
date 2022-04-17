import { Grid, TextField } from "@mui/material";
import { Box, Button, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ReactGrid from "../../../../../../components/ReactGrid";
import React, { useState } from "react";

const BrowseStationery = (props) => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number",
    },
    { name: "stationery", header: "Stationery", defaultFlex: 1 },
    { name: "description", header: "Description", defaultFlex: 3 },
    { name: "type", header: "Type", defaultFlex: 1 },
  ];

  const data = [
    {
      id: 1,
      stationery: "XPJOB",
      description: "Job Invoice Form",
      type: "INSAL",
    },
  ];

  const onSelectionChange = (selectedRow) => {
    console.log(selectedRow);
  };

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");

  const [value, setValue] = React.useState("1");

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={props.show}
      onClose={props.handleClose}
    >
      <DialogTitle>SYSTAB: Browse Stationery</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 1 }}>
          <Grid
            container
            direction={"row"}
            justifyContent="left"
            alignItems="center"
            className="OneLine"
          >
            <Grid item xs="3">
              Stationery Type:
            </Grid>
            <Grid item xs="2">
              <TextField
                size="small"
                required
                id="arledger-input"
                name="arledger"
                value={"INSAL"}
                autoFocus
                onChange={(e) => {}}
              />
            </Grid>
            <Grid item xs>
              <Button variant="outlined" className="browserbtn">
                ...
              </Button>
            </Grid>
          </Grid>
          <ReactGrid
            columns={columns}
            data={data}
            selectedRow={(row) => {
              console.log(row);
            }}
          />
        </Box>
        <DialogActions>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Select</Button>
            <Button variant="contained">Create</Button>
            <Button variant="contained">Modify</Button>
            <Button variant="contained" onClick={props.handleClose}>
              Close
            </Button>
          </Stack>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default BrowseStationery;
