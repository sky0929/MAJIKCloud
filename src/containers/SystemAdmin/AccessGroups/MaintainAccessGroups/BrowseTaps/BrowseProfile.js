import { TextField } from "@mui/material";
import { Box, Button, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ReactGrid from "../../../../../components/ReactGrid";
import React, { useState } from "react";

const BrowseProfile = (props) => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number",
    },
    { name: "profile", header: "Profile", defaultFlex: 1 },
    { name: "description", header: "Description", defaultFlex: 2 },
  ];

  const data = [{ id: 1, profile: "SML", description: "Sydney Markets LTD" }];

  const onSelectionChange = (selectedRow) => {
    console.log(selectedRow);
  };

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");

  const [value, setValue] = React.useState("1");

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={props.show}
      onClose={props.handleClose}
    >
      <DialogTitle>SYPRFB: Browse Profiles</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 1 }}>
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

export default BrowseProfile;
