import { Favorite } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Icon,
  IconButton,
  Slide,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const CartCard = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: "#fff",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-around",
  padding: "8px",
  display: "flex",
  color: "black",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

export const Small = styled("small")(({}) => ({
  // height: 15,
  // width: 50,
  fontWeight: "bolder",
  fontSize: "20px",
  marginLeft: 20,
  color: "#fff",
  padding: "5px 20px",
  borderRadius: "40px",
  overflow: "hidden",
  background: "#FFA500",
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
}));
export const StyledSmall = styled("small")(({}) => ({
  // height: 15,
  // width: 50,
  fontWeight: "bolder",
  fontSize: "20px",
  marginLeft: 20,
  color: "#fff",
  padding: "2px 10px",
  borderRadius: "30px",
  overflow: "hidden",
  background: "#FFA500",
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: "#008b7c",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  backgroundColor: "whitesmoke",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "start",
  fontWeight: "bolder",
  display: "flex",
  color: "black",
  "&:hover": {
    backgroundColor: "#FFA500",
    color: "white",
  },
}));

export const StyledTextFiled = styled(TextField)(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: "whitesmoke",
  border: "none",
  width: "2",
}));
export const StyledIconButton = styled(IconButton)(
  ({ theme, bgColor, color }) => ({
    backgroundColor: bgColor ?? "white",
    color: color ?? "#FFA500",
  })
);

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  maxHeight: "70%",
  overflow: "auto",

  top: "50%",
  left: "50%",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    padding: "16px !important",
  },
  ".&MuiCardContent-root": {
    maxHeight: "80%",

    overflow: "auto",
  },
}));

export const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const SuccessDialogContent = ({ message, handleOrderClose }) => {
  return (
    <Box>
      <Typography variant="h3">
        {message.length ? message : "Order Place SuccessFully !!"}
      </Typography>
      <Icon>
        <Favorite color="success" />
      </Icon>
      <Icon>
        <Favorite color="success" />
      </Icon>
      <Icon>
        <Favorite color="success" />
      </Icon>
      <Icon>
        <Favorite color="success" />
      </Icon>
      <Icon>
        <Favorite color="success" />
      </Icon>
      <Icon>
        <Favorite color="success" />
      </Icon>
      <Grid item xs={12}>
        <Button onClick={handleOrderClose} variant="contained">
          Ok
        </Button>
      </Grid>
    </Box>
  );
};

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "white",
}));

export const StyledMenuCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#00574ef0",
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#FFA500",
  boxShadow: "1px 2.5px #b8b8b8",
}));
