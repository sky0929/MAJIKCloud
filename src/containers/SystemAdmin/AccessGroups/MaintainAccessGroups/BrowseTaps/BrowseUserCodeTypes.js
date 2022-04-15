import { TextField } from "@mui/material";
import { Box, Button, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ReactGrid from "../../../../../components/ReactGrid";
import React, { useState } from "react";

const BrowseUserCodeTypes = (props) => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number",
    },
    { name: "codetype", header: "Code Type", defaultFlex: 1 },
    { name: "description", header: "Description", defaultFlex: 2 },
    { name: "type", header: "Type", defaultFlex: 1 },
  ];

  const data = [
    { id: 1, codetype: "FAACCESS", description: "FA ccess control", type: "A" },
    {
      id: 2,
      codetype: "FACLASS",
      description: "Fixed Assets Class",
      type: "C",
    },
    { id: 3, codetype: "FISHAREA", description: "FISH WORK AREA", type: "N" },
    { id: 4, codetype: "FISHCLEAN", description: "FISH CLEANING", type: "N" },
    { id: 5, codetype: "FIXED-RENT", description: "FIXED RENT", type: "N" },
    { id: 6, codetype: "FLOWER", description: "FLOWER SOLD", type: "C" },
    {
      id: 7,
      codetype: "FORKEXPD",
      description: "FORKLIFT EXPIRY DATE",
      type: "D",
    },
    { id: 8, codetype: "FORKMAKE", description: "FORKLIFT MAKE", type: "A" },
    { id: 9, codetype: "GDSA", description: "FFV Goods Sold", type: "A" },
    { id: 10, codetype: "GDSB", description: "SFV Goods Sold", type: "A" },
    { id: 11, codetype: "GDSD5", description: "FFR Goods Sold", type: "A" },
    { id: 12, codetype: "GDSD6", description: "SRI Goods Sold", type: "A" },
    { id: 13, codetype: "GDSD7", description: "FSI Goods Sold", type: "A" },
  ];

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

export default BrowseUserCodeTypes;
