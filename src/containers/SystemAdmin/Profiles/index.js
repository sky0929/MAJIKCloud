import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Fragment, useCallback } from "react";
import { connect } from "react-redux";
import ReactGrid from "../../../components/ReactGrid";
import MaintainProfiles from "./MaintainProfiles";

const Profiles = () => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number"
    },
    { name: "profile", header: "Profile", defaultFlex: 1 },
    {
      name: "description",
      header: "Description",
      defaultFlex: 1
    }
  ];

  const data = [
    { id: 1, profile: "FSP", description: "Flemington Storage Pt Ltd" },
    { id: 2, profile: "SML", description: "Sydney Markets LTD" }
  ];

  const onSelectionChange = selectedRow => {
    console.log(selectedRow);
  };

  return (
    <Fragment>
      <Typography variant="h3" gutterBottom component="h3">
        SYPRFB: Browse Profiles
      </Typography>
      <Box sx={{ mb: 1 }}>
        <ReactGrid
          columns={columns}
          data={data}
          selectedRow={row => {
            console.log(row);
          }}
        />
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Create</Button>
          <Button variant="contained">Modify</Button>
          <Button variant="contained">Close</Button>
        </Stack>
      </Box>
      <MaintainProfiles />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Profiles);
