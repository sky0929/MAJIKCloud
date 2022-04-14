import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Fragment, useCallback } from "react";
import { connect } from "react-redux";
import ReactGrid from "../../../components/ReactGrid";
import MaintainAccessGroups from "./MaintainAccessGroups";

const Profiles = () => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number",
    },
    { name: "accessgroup", header: "Access Group", defaultFlex: 1 },
    {
      name: "description",
      header: "Description",
      defaultFlex: 1,
    },
  ];

  const data = [
    { id: 1, accessgroup: "ADMIN", description: "System Administrator" },
    { id: 2, accessgroup: "BDM", description: "Enquiry Only" },
    { id: 3, accessgroup: "CEO", description: "Chief Executive Officer" },
    { id: 4, accessgroup: "FINADM", description: "Finance Admin Group" },
    { id: 5, accessgroup: "FINMGR", description: "Finanace - Managerial" },
    { id: 6, accessgroup: "FINPOS", description: "FINANCE POS" },
    { id: 7, accessgroup: "FINUSR", description: "Finance Users" },
    { id: 8, accessgroup: "FSADMIN", description: "FSP System Administrator" },
    { id: 9, accessgroup: "FSFINMGR", description: "FINANCE MANAGER" },
    { id: 10, accessgroup: "HMPOS", description: "Haymarket POS" },
    { id: 11, accessgroup: "HMPOS2", description: "Haymarket POS Backup" },
    { id: 12, accessgroup: "INFRINGE", description: "Infringement Group" },
    { id: 13, accessgroup: "KIOSK", description: "KIOSK ACCESS GROUP" },
  ];

  const onSelectionChange = (selectedRow) => {
    console.log(selectedRow);
  };

  return (
    <Fragment>
      <Typography variant="h3" gutterBottom component="h3">
        SYPRFB: Browse Access Group
      </Typography>
      <Box sx={{ mb: 1 }}>
        <ReactGrid
          columns={columns}
          data={data}
          selectedRow={(row) => {
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
      <MaintainAccessGroups />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Profiles);
