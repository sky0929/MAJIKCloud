import { TextField } from "@mui/material";
import { Box, Button, Stack, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import General from "./General";
import Profiles from "./Profiles";
import BatchQueues from "./BatchQueues";
import Security from "./Security";
import UserField from "./UserField";
import MoreInfo from "./MoreInfo";

const MaintainProfiles = ({}) => {
  const [open, setOpen] = useState(true);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>SYACGM: Maintain Access Groups</DialogTitle>
      <DialogContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="accessgroup-input"
              label="AccessGroup"
              name="accessgroup"
              autoComplete="accessgroup"
              autoFocus
              value={"ADMIN"}
              onChange={(e) => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="groupdesc-input"
              label="Group Desc"
              name="groupdesc"
              autoComplete="groupdesc"
              value={"System Administrator"}
              onChange={(e) => {}}
            />
          </Grid>
        </Grid>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="General" value="1" />
              <Tab label="Profiles" value="2" />
              <Tab label="Batch Queues" value="3" />
              <Tab label="Security" value="4" />
              <Tab label="User Field" value="5" />
              <Tab label="More Info" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <General />
          </TabPanel>
          <TabPanel value="2">
            <Profiles />
          </TabPanel>
          <TabPanel value="3">
            <BatchQueues />
          </TabPanel>
          <TabPanel value="4">
            <Security />
          </TabPanel>
          <TabPanel value="5">
            <UserField />
          </TabPanel>
          <TabPanel value="6">
            <MoreInfo />
          </TabPanel>
        </TabContext>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MaintainProfiles;
