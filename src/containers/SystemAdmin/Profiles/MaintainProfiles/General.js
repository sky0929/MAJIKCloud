import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const General = () => {
  const [profile, setProfile] = useState("system-level-batch-numbers");

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="general-profile-select-label">
          Profile / System
        </InputLabel>
        <Select
          labelId="general-profile-select-label"
          id="general-profile-select"
          value={profile}
          label="Age"
          onChange={e => {
            setProfile(e.target.value);
          }}
        >
          <MenuItem value={"system-level-batch-numbers"}>
            System Level Batch Numbers
          </MenuItem>
          <MenuItem value={"system-level-batch-numbers1"}>
            System Level Batch Numbers 1
          </MenuItem>
          <MenuItem value={"system-level-batch-numbers2"}>
            System Level Batch Numbers 2
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          margin="normal"
          required
          fullWidth
          id="current-period-input"
          label="Current Period"
          name="current-period"
          autoComplete="Current Period"
          value={"2000-008"}
          onChange={e => {}}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          margin="normal"
          required
          fullWidth
          id="reports-path-input"
          label="Reports Path"
          name="reports-path"
          autoComplete="Reports Path"
          value={"%PTR-Path%Reports\\"}
          onChange={e => {}}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          margin="normal"
          required
          fullWidth
          id="current-period-input"
          label="Country"
          name="country"
          autoComplete="Country"
          value={"AUS"}
          onChange={e => {}}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          margin="normal"
          required
          fullWidth
          id="format-input"
          label="Format"
          name="format"
          autoComplete="Format"
          value={"##-###-###-###"}
          onChange={e => {}}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          margin="normal"
          required
          fullWidth
          id="tax-desc-input"
          label="Tax Description"
          name="tax-desc"
          autoComplete="Tax Description"
          value={"ABN"}
          onChange={e => {}}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          margin="normal"
          required
          fullWidth
          id="abn-input"
          label="ABN"
          name="abn"
          autoComplete="ABN"
          value={"51-077-119-290"}
          onChange={e => {}}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          margin="normal"
          required
          fullWidth
          id="Used-input"
          label="Used"
          name="used"
          autoComplete="Used"
          value={"0000026"}
          disabled
          onChange={e => {}}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          margin="normal"
          required
          fullWidth
          id="ctls-input"
          label="Ctls"
          name="ctls"
          autoComplete="Ctls"
          value={"0000027"}
          disabled
          onChange={e => {}}
        />
      </FormControl>
    </Box>
  );
};

export default General;
