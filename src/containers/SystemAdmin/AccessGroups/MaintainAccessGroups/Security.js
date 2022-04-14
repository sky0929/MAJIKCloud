import { Box, Button, Stack, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Fragment, useCallback } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ReactGrid from "../../../../components/ReactGrid";
import ProgramSearchCriteria from "./BrowseTaps/ProgramSearchCriteria";

const Security = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number",
    },
    {
      name: "programmask",
      header: "Program/Mask",
      defaultFlex: 1,
      render: (value) => {
        return (
          <Grid
            container
            direction="row"
            spacing={0}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={9} className="list">
              {value.value}
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={() => {
                  setOpen(true);
                }}
                variant="contained"
              >
                ...
              </Button>
            </Grid>
          </Grid>
        );
      },
    },
    { name: "description", header: "Description", defaultFlex: 2 },
    { name: "mod", header: "Mod", defaultFlex: 1 },
    { name: "add", header: "Add", defaultFlex: 1 },
    { name: "del", header: "Del", defaultFlex: 1 },
    { name: "query", header: "Query", defaultFlex: 1 },
  ];

  const data = [
    {
      id: 1,
      programmask: "COPHN?????",
      description: "All Matching Programs",
      mod: "Yes",
      add: "Yes",
      del: "Yes",
      query: "Yes",
    },
  ];

  const onSelectionChange = (selectedRow) => {
    console.log(selectedRow);
  };

  return (
    <fragment>
      <Box sx={{ mb: 1 }}>
        <ReactGrid
          columns={columns}
          data={data}
          selectedRow={(row) => {
            console.log(row);
          }}
        />
      </Box>
      <ProgramSearchCriteria show={open} handleClose={handleClose} />
    </fragment>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Security);
