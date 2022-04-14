import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#673AB7"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
