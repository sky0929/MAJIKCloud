import { Box, Button, Stack, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Fragment, useCallback, useState } from "react";
import { connect } from "react-redux";
import ReactGrid from "../../../../components/ReactGrid";
import ProfileDlg from "./TabDlgs/ProfilesDlg";

const Profiles = () => {
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
      name: "profile",
      header: "Profile",
      defaultFlex: 1,
      render: (value) => {
        return (
          <Grid container direction="row" spacing={0}>
            <Grid item xs={10} className="list">
              {value.value}
            </Grid>
            <Grid item xs={2}>
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
    { name: "description", header: "Description", defaultFlex: 2 },
  ];

  const data = [{ id: 1, profile: "SML", description: "Sydney Markets LTD" }];

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
      <ProfileDlg show={open} handleClose={handleClose} />
    </fragment>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Profiles);
