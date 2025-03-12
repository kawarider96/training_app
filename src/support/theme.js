import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",  // Kék
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff4081", // Rózsaszín
      light: "#ff79b0",
      dark: "#c60055",
      contrastText: "#000",
    },
    background: {
      default: "#f4f4f4",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "none", // Kisbetűs gombszöveg
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Lekerekített gombok
        },
      },
    },
  },
});

export default theme;
