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
import BrowseCentres from "./MoreInfoDlgs/BrowseCentres";
import BrowseStationery from "./MoreInfoDlgs/BrowseStationery";
import Printers from "./MoreInfoDlgs/Printers";
import NextPage from "./MoreInfoDlgs/NextPage";

const AccessGroupMoreInfo = (props) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [centreopen, setCentreOpen] = useState(false);
  const [stationaryopen, setStationaryOpen] = useState(false);
  const [printersopen, setPrintersOpen] = useState(false);
  const [nextpageopen, setNextPageOpen] = useState(false);

  const handleClose = () => {
    setCentreOpen(false);
    setStationaryOpen(false);
    setPrintersOpen(false);
    setNextPageOpen(false);
  };

  return (
    <fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={props.show}
        onClose={props.handleClose}
      >
        <DialogTitle>Access Group More Info</DialogTitle>
        <DialogContent>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={4}>
              ADMIN
            </Grid>
            <Grid item xs={8}>
              System Administrator
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
            <Grid item xs={4}>
              <label> Property </label>
            </Grid>
            <Grid item xs={8}>
              <TextField
                size="small"
                required
                id="arledger-input"
                name="arledger"
                value={30}
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setCentreOpen(true);
                }}
              >
                ...
              </Button>
              <label> Site Services </label>
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
            <Grid item xs={2}>
              <label> Override Center: </label>
            </Grid>
            <Grid item xs={3}>
              <FormControl size="small">
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
            <Grid item xs={7}>
              <label> Cash Book: </label>
              <TextField
                size="small"
                required
                id="arledger-input"
                name="arledger"
                value={"CSB"}
                onChange={(e) => {}}
              />
              <Button variant="outlined" className="browserbtn">
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
            <Grid item xs={2.5}></Grid>
            <Grid item xs={1}>
              <label> Allow </label>
            </Grid>
            <Grid item xs={1}>
              <label> Online </label>
            </Grid>
            <Grid item xs={1.5}>
              <label> Stat </label>
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
            <Grid item xs={2.5}>
              <label>Sales Orders:</label>
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
            <Grid item xs={1.5}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="XPJOB"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationaryOpen(true);
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
            <Grid item xs={2.5}>
              <label>Packing Slips:</label>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={(e) => {}}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth size="small" disabled>
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
            <Grid item xs={1.5}>
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
                  setStationaryOpen(true);
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
            <Grid item xs={2.5}>
              <label>Invoices:</label>
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
            <Grid item xs={1.5}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="XPJOB"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationaryOpen(true);
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
            <Grid item xs={2.5}>
              <label>Credits:</label>
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
            <Grid item xs={1.5}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value="INV"
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationaryOpen(true);
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
            <Grid item xs={2.5}>
              <label>Quotations:</label>
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
            <Grid item xs={1.5}>
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
                  setStationaryOpen(true);
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
            <Grid item xs={3.5}>
              <label>Purchase Orders:</label>
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
            <Grid item xs={1.5}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                value={"POTM"}
                className="browserbox"
                onChange={(e) => {}}
              />
              <Button
                variant="outlined"
                className="browserbtn"
                onClick={() => {
                  setStationaryOpen(true);
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
            <Grid item xs={3.5}>
              <label>Production Orders:</label>
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
            <Grid item xs={1.5}>
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
                  setStationaryOpen(true);
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
            <Grid item xs={4.5}>
              <label>Allow Purchase Order Approval:</label>
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
            <Grid item xs={1}></Grid>
            <Grid item xs={4.5}>
              <label>Modify Closed Purch. Inv:</label>
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
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={4.5}>
              <label>Purchse Order Approval Amout:</label>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                fullWidth
                value={"6,000,000.00"}
                onChange={(e) => {}}
              />
            </Grid>
            <Grid item xs={4.5}>
              <label>POGR Unit Cst Override:</label>
            </Grid>
            <Grid item xs={1}>
              <TextField
                size="small"
                required
                id="stat-input"
                name="stat"
                fullWidth
                value={"500.99"}
                onChange={(e) => {}}
              />
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
            <Grid item xs={4.5}>
              <label>Override Unit Sell Price:</label>
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
            <Grid item xs={1}></Grid>
            <Grid item xs={4.5}>
              <label>Override Unit Cost:</label>
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
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={4.5}>
              <label>Override List Sell Price:</label>
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
            <Grid item xs={1}></Grid>
            <Grid item xs={4.5}>
              <label>Release Held Orders:</label>
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
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={4.5}>
              <label>Override Minimum Markup:</label>
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
            <Grid item xs={1}></Grid>
            <Grid item xs={4.5}>
              <label>Print Held Orders:</label>
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
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={4.5}>
              <label>Check for Procurement Non-Zero Cost:</label>
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
            <Grid item xs={1}></Grid>
            <Grid item xs={4.5}>
              <label>Display Costs & Margins:</label>
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
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={4.5}>
              <label>Force Invoice selection for Credits:</label>
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
            <Grid item xs={1}></Grid>
            <Grid item xs={4.5}>
              <label>Allow PO GL Line:</label>
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
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="OneLine"
          >
            <Grid item xs={4.5}>
              <label>Offer Invoice after Pick/Pack:</label>
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
          </Grid>
          <DialogActions>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => {
                  setNextPageOpen(true);
                }}
              >
                Next Page
              </Button>
              <Button variant="contained" onClick={props.handleClose}>
                Close
              </Button>
            </Stack>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <BrowseCentres show={centreopen} handleClose={handleClose} />
      <BrowseStationery show={stationaryopen} handleClose={handleClose} />
      <Printers show={printersopen} handleClose={handleClose} />
      <NextPage show={nextpageopen} handleClose={handleClose} />
    </fragment>
  );
};

export default AccessGroupMoreInfo;
