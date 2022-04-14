import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import http from "../../../utils/helpers/apiHelper";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submitLogin = () => {
    let body = { username: username, password: password };
    /* http.post("users/login", body).then(data => {
      console.log(data);
      if (data) {
        localStorage.setItem("token", data.token);
        saveLoggedInUser(data.user, true, data.token);
        navigate("/");
      } else {
        window.alert("something went wrong");
      }
    }); */
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container component="div">
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: {
                xs: "100%", // theme.breakpoints.up('xs')
                sm: "75%", // theme.breakpoints.up('sm')
                md: "50%" // theme.breakpoints.up('sm')
              }
            }}
          >
            <Typography
              component="h2"
              variant="h2"
              sx={{
                pb: 2,
                color: "primary.main",
                fontWeight: 700,
                fontSize: "1.5rem"
              }}
            >
              Hi, Welcome Back
            </Typography>
            <Typography
              component="span"
              variant="caption"
              sx={{ pb: 2, color: "text.secondary", fontSize: "1rem" }}
            >
              Enter your credentials to continue
            </Typography>
            <Box
              component="form"
              onSubmit={submitLogin}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username-input"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password-input"
                value={password}
                autoComplete="current-password"
                onChange={e => {
                  setPassword(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={submitLogin}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography
              component="h1"
              variant="h1"
              sx={{
                pb: 1,
                color: "secondary.main",
                fontWeight: 700,
                fontSize: "1.5rem"
              }}
            >
              MAJIK Cloud 
              Frontend
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
