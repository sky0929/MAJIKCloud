import React, { Fragment, useCallback } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import { Box, Button, Grid } from "@mui/material";

const Profiles = () => {
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={4}>
          <TextField
            size="small"
            required
            fullWidth
            id="initialmenu-input"
            label="Initial Menu"
            name="initialmenu"
            autoComplete="initialmenu"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={4}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="floatmenu-input"
            label="Float Menu"
            name="floatmenu"
            autoComplete="floatmenu"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={5}>
          <FormControl fullWidth size="small" margin="normal">
            <InputLabel id="demo-simple-select-label">Security Ctl</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Security Ctl"
              onChange={(e) => {}}
            >
              <MenuItem value={10}>Inclusive</MenuItem>
              <MenuItem value={20}>Inclusive1</MenuItem>
              <MenuItem value={30}>Inclusive2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>
      <Divider variant="middle" />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="glledger-input"
            label="GL Ledger"
            name="glledger"
            autoComplete="glledger"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={1}>
          <Button className="browserbtn" variant="outlined">
            ...
          </Button>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="slledger-input"
            label="SL Ledger"
            name="slledger"
            autoComplete="slledger"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={1}>
          <Button className="browserbtn" variant="outlined">
            ...
          </Button>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="arledger-input"
            label="AR Ledger"
            name="arledger"
            autoComplete="arledger"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={1}>
          <Button className="browserbtn" variant="outlined">
            ...
          </Button>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="apledger-input"
            label="AP Ledger"
            name="apledger"
            autoComplete="apledger"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={1}>
          <Button className="browserbtn" variant="outlined">
            ...
          </Button>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="faledger-input"
            label="FA Ledger"
            name="faledger"
            autoComplete="faledger"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={1}>
          <Button className="browserbtn" variant="outlined">
            ...
          </Button>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Divider variant="middle" />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="defprofile-input"
            label="Def Profile"
            name="defprofile"
            autoComplete="defprofile"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={1}>
          <Button className="browserbtn" variant="outlined">
            ...
          </Button>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={2}>
          <FormControl fullWidth size="small" margin="normal">
            <InputLabel id="demo-simple-select-label">Mandatory</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Mandatory"
              onChange={(e) => {}}
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="defqueue-input"
            label="Def Queue"
            name="defqueue"
            autoComplete="defqueue"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={1}>
          <Button className="browserbtn" variant="outlined">
            ...
          </Button>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={2}>
          <FormControl fullWidth size="small" margin="normal">
            <InputLabel id="demo-simple-select-label">Mandatory</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Mandatory"
              onChange={(e) => {}}
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={10}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="reports-input"
            label="Reports Dir"
            name="reports"
            autoComplete="reports"
            onChange={(e) => {}}
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={2}>
          <span>Users:</span>
        </Grid>
        <Grid item xs={2}>
          <span>000000</span>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={2}>
          <span>Profiles:</span>
        </Grid>
        <Grid item xs={2}>
          <span>000000</span>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={2}>
          <label>Queues:</label>
        </Grid>
        <Grid item xs={2}>
          <label>000000</label>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </fragment>
  );
};

export default Profiles;
