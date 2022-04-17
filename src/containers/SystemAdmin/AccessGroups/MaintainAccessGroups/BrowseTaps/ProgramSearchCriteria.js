import { TextField } from "@mui/material";
import { Box, Button, Stack, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ReactGrid from "../../../../../components/ReactGrid";
import React, { useState } from "react";

const ProgramSearchCriteria = (props) => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number",
    },
    { name: "program", header: "Program", defaultFlex: 1 },
    { name: "description", header: "Description", defaultFlex: 2 },
    { name: "quickkey", header: "Quick-Key", defaultFlex: 1 },
    { name: "number", header: "Number", defaultFlex: 1 },
  ];

  const data = [
    {
      id: 1,
      program: "COPHNB",
      description: "Browse Phone Numbers",
      quickkey: "",
      number: "1395",
    },
    {
      id: 2,
      program: "COPHNM",
      description: "Maintain Phone Numbers",
      quickkey: "",
      number: "1394",
    },
    {
      id: 3,
      program: "COPRIB",
      description: "Browse Priority",
      quickkey: "",
      number: "1378",
    },
    {
      id: 4,
      program: "COPRIM",
      description: "Maintain Priority",
      quickkey: "",
      number: "1377",
    },
    {
      id: 5,
      program: "COPROB",
      description: "Browse Priority",
      quickkey: "",
      number: "1376",
    },
    {
      id: 6,
      program: "COPROM",
      description: "Maintain Priority",
      quickkey: "",
      number: "1375",
    },
    {
      id: 7,
      program: "COPRORFA",
      description: "Project Folio Answers",
      quickkey: "",
      number: "1457",
    },
    {
      id: 8,
      program: "COPTRB",
      description: "Browse Pts Redemption",
      quickkey: "",
      number: "1401",
    },
    {
      id: 9,
      program: "COPTRM",
      description: "Maintain Pts Redemption",
      quickkey: "",
      number: "1402",
    },
    {
      id: 10,
      program: "COPTSP",
      description: "Post Loyalty Pts Redeem",
      quickkey: "",
      number: "1404",
    },
    {
      id: 11,
      program: "COPTSR",
      description: "Loyalty Points Report",
      quickkey: "",
      number: "1403",
    },
    {
      id: 12,
      program: "COPTYB",
      description: "Browse Phone Types",
      quickkey: "",
      number: "1393",
    },
    {
      id: 13,
      program: "COPTYM",
      description: "Maintain Phone Types",
      quickkey: "",
      number: "1392",
    },
  ];

  const onSelectionChange = (selectedRow) => {
    console.log(selectedRow);
  };

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const [value, setValue] = React.useState("1");

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={props.show}
      onClose={props.handleClose}
    >
      <DialogTitle>Program Search Criteria</DialogTitle>
      <DialogContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="programid-input"
              label="Program Id"
              name="programid"
              autoComplete="programid"
              value={"COPHN?????"}
              onChange={(e) => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="quickkey-input"
              label="Quick-Key"
              name="quickkey"
              autoComplete="quickkey"
              value={""}
              onChange={(e) => {}}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="description-input"
              label="Description"
              name="description"
              autoComplete="description"
              value={""}
              onChange={(e) => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained">Search</Button>
          </Grid>
        </Grid>
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
            <Button variant="contained">Execut Program</Button>
            <Button variant="contained">Program Control</Button>
            <Button variant="contained">Select</Button>
            <Button variant="contained" onClick={props.handleClose}>
              Close
            </Button>
          </Stack>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ProgramSearchCriteria;
