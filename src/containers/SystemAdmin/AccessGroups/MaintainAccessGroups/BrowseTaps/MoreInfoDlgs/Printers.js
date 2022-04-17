import { Grid, TextField } from "@mui/material";
import { Box, Button, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ReactGrid from "../../../../../../components/ReactGrid";
import React, { useState } from "react";

const Printers = (props) => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number",
    },
    { name: "printername", header: "Printer Name", defaultFlex: 1 },
  ];

  const data = [
    {
      id: 1,
      printername: "PRINTER",
    },
    {
      id: 2,
      printername: "SALES CREDIT NOTE A4",
    },
    {
      id: 3,
      printername: "SALES DEPT INVOICE",
    },
    {
      id: 4,
      printername: "SALES DEPT ORDER SHEET",
    },
    {
      id: 5,
      printername: "SALES DEPT PO",
    },
    {
      id: 6,
      printername: "SALES DEPT PO CREDIT",
    },
    {
      id: 7,
      printername: "SALES INVOICE A4",
    },
    {
      id: 8,
      printername: "Share Certificate HP670",
    },
    {
      id: 9,
      printername: "MAIN OFF STATEMENT PRINTER",
    },
    {
      id: 10,
      printername: "STF CREDIT NOTE A4",
    },
    {
      id: 11,
      printername: "STF DEPT PO",
    },
    {
      id: 12,
      printername: "STF INVOICE A4",
    },
    {
      id: 13,
      printername: "STF SALES ORDERSHEET",
    },
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
      <DialogTitle>PRINTERS</DialogTitle>
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

export default Printers;
