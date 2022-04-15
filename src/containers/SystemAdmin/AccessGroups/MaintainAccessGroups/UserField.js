import { Box, Button, Stack, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Fragment, useCallback } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ReactGrid from "../../../../components/ReactGrid";
import BrowseUserCodeTypes from "./BrowseTaps/BrowseUserCodeTypes";

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
    { name: "seq", header: "Seq", defaultFlex: 1 },
    {
      name: "userfield",
      header: "User Field",
      defaultFlex: 2,
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
              >
                ...
              </Button>
            </Grid>
          </Grid>
        );
      },
    },
    { name: "description", header: "Description", defaultFlex: 3 },
    { name: "accttype", header: "Acct Type", defaultFlex: 2 },
    { name: "fieldtype", header: "Field Type", defaultFlex: 2 },
  ];

  const data = [
    {
      seq: 1,
      userfield: "FAACCESS",
      description: "FA ccess control",
      accttype: "",
      fieldtype: "Normal",
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
      <BrowseUserCodeTypes show={open} handleClose={handleClose} />
    </fragment>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Security);
