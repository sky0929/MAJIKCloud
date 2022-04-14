import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import { connect } from "react-redux";

const NotFound = props => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography variant="h1" gutterBottom component="h1">
        404 - Page not Found
      </Typography>
    </Box>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(NotFound);
