import {
  Button,
  Stack,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import BrowseStationery from "./BrowseStationery";
import Printers from "./Printers";

const NextPage = (props) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [stationeryopen, setStationeryOpen] = useState(false);
  const [printersopen, setPrintersOpen] = useState(false);

  const handleClose = () => {
    setStationeryOpen(false);
    setPrintersOpen(false);
  };

  return (
    <fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={props.show}
        onClose={props.handleClose}
      >
        <DialogTitle>Next Page</DialogTitle>
        <DialogContent>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              Stationary Type
            </Grid>
            <Grid item xs={1}>
              <label> Allow </label>
            </Grid>
            <Grid item xs={2}>
              <label> Stationary Id </label>
            </Grid>
            <Grid item xs={6}>
              <label> Output Device </label>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>CB Cheques (CBCHQ):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="CBDEF"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"PRINTER"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>CB Receipts (CBRCT):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="CBREC"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>CB Cheques (CBCHQ):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="XPCHQ"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"PRINTER"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>DR Bill (DRINV):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="XPIN3"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"PRINTER"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>DR Receipts (DRRCT):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="CNOTE"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"PRINTER"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>IN Transfer Form (INTFR):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>JM Jobs Form (JMJBH):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="SMLWC"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"PRINTER"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>PO Receipt Label (POGRH):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={0}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>PO Credit Notes (POINV):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>DR Statement (STMT):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="STMTC"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"PRINTER"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>SV Warranty Claims (SVWCH):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>DR Point of Sales (DRPOS) 1:</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="RCPT"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"POS"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>DR Point of Sales (DRPOS) 2:</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="POSI"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"POS"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>DR POS Cancel Receipt (3):</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="POSC"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"POS"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={3}>
              <label>INPTR Property Tranfer:</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="XPSHR"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationeryOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"PRINTER"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setPrintersOpen(true);
                }}
              >
                ...
              </Button>
            </Grid>
          </Grid>
          <DialogActions>
            <Button variant="contained" onClick={props.handleClose}>
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <BrowseStationery show={stationeryopen} handleClose={handleClose} />
      <Printers show={printersopen} handleClose={handleClose} />
    </fragment>
  );
};

export default NextPage;
