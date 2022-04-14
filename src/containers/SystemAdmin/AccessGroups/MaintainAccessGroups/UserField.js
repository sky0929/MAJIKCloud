import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Fragment, useCallback } from "react";
import { connect } from "react-redux";
import ReactGrid from "../../../../components/ReactGrid";

const Security = () => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number",
    },
    { name: "seq", header: "Seq", defaultFlex: 1 },
    { name: "userfield", header: "User Field", defaultFlex: 2 },
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
    <Box sx={{ mb: 1 }}>
      <ReactGrid
        columns={columns}
        data={data}
        selectedRow={(row) => {
          console.log(row);
        }}
      />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Security);
