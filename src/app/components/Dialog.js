import { Facebook, Fastfood, Instagram, YouTube } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  StyledAvatar,
  StyledCard,
  StyledDivider,
  StyledIconButton,
  StyledSmall,
  Transition,
} from "./SyledComponents";

const Dialog = ({
  menuList,
  open,
  handleClose,
  handleCountAdd,
  error,
  handlePlaceOrder,
  handleInfoChange,
  count,
  info,
}) => {
  let amountArr = [];
  let _data = menuList.filter((List, i) => List.amount);
  menuList
    ?.filter((List, i) => List.amount)
    .map((list) => amountArr.push(parseFloat(list.totalPrice)));

  let totalAmount = amountArr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return (
    <Modal TransitionComponent={Transition} open={open} onClose={handleClose}>
      <StyledCard>
        <Grid container spacing={4}>
          <Grid item xs={7.5}>
            <CardContent>
              <Grid item xs={12}>
                <Typography variant="h3">Orders</Typography>
                <StyledDivider />
              </Grid>
              {count ? (
                <Grid container spacing={2}>
                  {_data?.map((list, index) => {
                    return (
                      <>
                        <Grid item xs={12}>
                          <List>
                            <ListItem
                              secondaryAction={
                                <Box
                                  justifyContent={"end"}
                                  display={"flex"}
                                  gap={2}
                                  textAlign="center"
                                  color={"Background"}
                                  p="10px"
                                  sx={{
                                    backgroundColor: "#008b7c",
                                    borderRadius: "20px",
                                  }}
                                >
                                  <Typography variant="h6">Amount :</Typography>
                                  <Typography variant="h6">
                                    $ {(list?.totalPrice).toFixed(2)}
                                  </Typography>
                                </Box>
                              }
                            >
                              <ListItemAvatar>
                                <StyledAvatar>
                                  <Fastfood />
                                </StyledAvatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <Typography variant="h6">
                                    {list[1]?.name}
                                  </Typography>
                                }
                                secondary={
                                  <Box display={"flex"}>
                                    <Typography
                                      variant="h5"
                                      fontWeight={"medium"}
                                    >
                                      {"$" + " " + list[1]?.price}
                                    </Typography>
                                    <Tooltip title="Quantity" arrow>
                                      <StyledSmall>
                                        {"x" + list?.amount}
                                      </StyledSmall>
                                    </Tooltip>
                                  </Box>
                                }
                              />
                            </ListItem>

                            {index !== 4 && <StyledDivider />}
                          </List>
                        </Grid>
                      </>
                    );
                  })}
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent={"space-between"}
                    textAlign="center"
                    color={"Background"}
                    pb={1}
                    pr={1}
                    sx={{
                      backgroundColor: "#008b7c",
                      borderRadius: "5px",
                      mt: 4,
                    }}
                  >
                    <Typography variant="h6"> Total Amount</Typography>
                    <Typography variant="h6">
                      ${Number(totalAmount).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <Grid item textAlign="center" xs={12}>
                  <Typography variant="h5">*** No Orders Placed ***</Typography>
                </Grid>
              )}
            </CardContent>
          </Grid>
          <StyledDivider orientation="vertical" variant="middle" flexItem />
          <Grid item xs={4}>
            <Typography variant="h3"> Personal Info</Typography>
            <Grid item xs={12} m={2}>
              <Typography variant="h5">Name</Typography>
              <TextField
                name="name"
                value={info.name}
                error={error?.name}
                onBlur={(e) => handleInfoChange(e)}
                onChange={(e) => handleInfoChange(e)}
                fullWidth
                placeholder="Enter Your Name"
                helperText={error?.name ? "Required" : ""}
              />
            </Grid>
            <Grid item xs={12} m={2}>
              <Typography variant="h5">Street</Typography>
              <TextField
                name="street"
                value={info.street}
                error={error?.street}
                onBlur={(e) => handleInfoChange(e)}
                onChange={(e) => handleInfoChange(e)}
                fullWidth
                placeholder="Enter Your Street"
                helperText={error?.street ? "Required" : ""}
              />
            </Grid>
            <Grid item xs={12} m={2}>
              <Typography variant="h5">Postal Code</Typography>
              <TextField
                name="code"
                value={info.code}
                error={error?.code}
                onBlur={(e) => handleInfoChange(e)}
                onChange={(e) => handleInfoChange(e)}
                fullWidth
                placeholder="Enter Your Postal Code"
                helperText={error?.code ? "Required" : ""}
              />
            </Grid>{" "}
            <Grid item xs={12} m={2}>
              <Typography variant="h5">Phone No.</Typography>
              <TextField
                name="phone"
                value={info.phone}
                type="number"
                error={error?.phone}
                onBlur={(e) => handleInfoChange(e)}
                onChange={(e) => handleInfoChange(e)}
                fullWidth
                placeholder="Enter Your Phone.No"
                helperText={error?.phone ? "Required" : ""}
              />
            </Grid>
            <Grid item xs={12} m={2}>
              <Typography
                variant="body1"
                fontWeight={"bolder"}
                color={"#008b7c"}
              >
                Follow us on :
              </Typography>
              <Box
                display={"flex"}
                padding="2px"
                color={"#008b7c"}
                alignItems="center"
                gap={1}
              >
                <StyledIconButton bgColor={"#008b7c"} color={"white"}>
                  <Instagram />
                </StyledIconButton>
                <StyledIconButton bgColor={"#008b7c"} color={"white"}>
                  <Facebook />
                </StyledIconButton>
                <StyledIconButton bgColor={"#008b7c"} color={"white"}>
                  <YouTube />
                </StyledIconButton>
              </Box>
            </Grid>
            <CardActions>
              <Button onClick={handleClose}>Cancel</Button>
              {count !== 0 && info.name && info.phone && (
                <Button
                  variant="contained"
                  onClick={handlePlaceOrder}
                  disabled={
                    error?.name || error?.code || error?.street || error?.phone
                  }
                >
                  Place Orders
                </Button>
              )}
            </CardActions>
          </Grid>
        </Grid>
      </StyledCard>
    </Modal>
  );
};

export default Dialog;
