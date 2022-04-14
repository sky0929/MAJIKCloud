import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import ProfileControl from "./ProfileControl";
import Map from "./Map";
import General from "./General";

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
      <DialogTitle>SYPRFM: Maintain Profiles</DialogTitle>
      <DialogContent>
        <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="profile-input"
            label="Profile"
            name="profile"
            autoComplete="profile"
            autoFocus
            value={"SML"}
            onChange={e => {}}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description-input"
            label="Description"
            name="description"
            autoComplete="description"
            autoFocus
            value={"Sydney Markets LTD"}
            onChange={e => {}}
          />
        </Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="General" value="1" />
              <Tab label="Profile Control" value="2" />
              <Tab label="Map" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <General />
          </TabPanel>
          <TabPanel value="2">
            <ProfileControl />
          </TabPanel>
          <TabPanel value="3">
            <Map />
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
