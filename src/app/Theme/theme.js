import { createTheme } from "@mui/material";

const colors = {
  primary: "#008b7c",
  secondary: "#FFA500",
  primaryDark: "#00574e",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    info: {
      main: colors.primaryDark,
    },
  },
});

export default theme;
