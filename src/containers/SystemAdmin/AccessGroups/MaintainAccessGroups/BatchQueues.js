import { Box, Button, Stack, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Fragment, useCallback } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ReactGrid from "../../../../components/ReactGrid";
import BrowseBatchQueues from "./BrowseTaps/BrowseBatchQueues";

const BatchQueues = () => {
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
      render: () => {},
    },
    {
      name: "queueid",
      header: "Queue Id",
      defaultFlex: 1,
      render: (value) => {
        return (
          <Grid container direction="row" spacing={0}>
            <Grid item xs={10} className="list">
              {value.value}
            </Grid>
            <Grid item xs={2}>
              <Button
                size="small"
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
    { name: "description", header: "Description", defaultFlex: 2 },
  ];

  const data = [{ id: 1, profile: "", description: "" }];

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
      <BrowseBatchQueues show={open} handleClose={handleClose} />
    </fragment>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(BatchQueues);
