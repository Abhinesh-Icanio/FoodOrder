import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Grid, Icon, Toolbar, Typography } from "@mui/material";
import React from "react";
import Dialog from "./Dialog";
import { CartCard, Small } from "./SyledComponents";

const appBar = ({
  menuList,
  count,
  handleModal,
  open,
  menuCount,
  handlePlaceOrder,
  handleInfoChange,
  handleCountAdd,
  handleModalClose,
  error,
  info,
}) => {
  return (
    <Grid item xs={12}>
      <AppBar color={"info"} position="static">
        <Toolbar>
          <Grid
            container
            spacing={2}
            justifyContent={"space-around"}
            padding={"15px"}
          >
            <Grid item display={"flex"} gap={2}>
              <Grid display={"flex"}>
                <Typography variant="h2" color={"secondary"}>
                  F
                </Typography>
                <Typography variant="h3" sx={{ pl: 0.1, pt: 1.4 }}>
                  ood
                </Typography>
              </Grid>
              <Grid display={"flex"}>
                <Typography variant="h2" color={"secondary"}>
                  E
                </Typography>
                <Typography variant="h3" sx={{ pl: 0.2, pt: 1.4 }}>
                  ngine
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={1.7} md={6} sm={6} xs={6} alignSelf="center">
              <CartCard onClick={handleModal} fullWidth>
                <Icon sx={{ pl: 2, pr: 1 }}>
                  <ShoppingCart />
                </Icon>
                <Typography variant="h6">Shopping Cart</Typography>
                <Small>{count}</Small>
              </CartCard>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Dialog
        menuList={menuList}
        handlePlaceOrder={handlePlaceOrder}
        open={open}
        handleClose={handleModalClose}
        menuCount={menuCount}
        count={count}
        handleInfoChange={handleInfoChange}
        handleCountAdd={handleCountAdd}
        info={info}
        error={error}
      />
    </Grid>
  );
};

export default appBar;
