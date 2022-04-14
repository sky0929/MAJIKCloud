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
    { name: "programmask", header: "Program/Mask", defaultFlex: 1 },
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
