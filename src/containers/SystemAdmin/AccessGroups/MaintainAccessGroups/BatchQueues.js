import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Fragment, useCallback } from "react";
import { connect } from "react-redux";
import ReactGrid from "../../../../components/ReactGrid";
import BatchQueuesDlg from "./TabDlgs/BatchQueuesDlg";

const BatchQueues = () => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number",
    },
    { name: "queueid", header: "Queue Id", defaultFlex: 1 },
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
          //data={data}
          selectedRow={(row) => {
            console.log(row);
          }}
        />
      </Box>
      <BatchQueuesDlg />
    </fragment>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(BatchQueues);
