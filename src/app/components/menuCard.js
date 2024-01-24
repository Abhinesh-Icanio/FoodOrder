import {
  AddShoppingCart,
  Facebook,
  Fastfood,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import {
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  StyledAvatar,
  StyledButton,
  StyledDivider,
  StyledIconButton,
  StyledMenuCard,
  StyledTextFiled,
  StyledTypography,
} from "./SyledComponents";

const menuCard = ({ menuList, handleCountAdd, handleOrder, count }) => {
  return (
    <Grid item xs={8} textAlign="center">
      <StyledMenuCard>
        <Grid container display={"flex"} justifyContent="center" gap={2}>
          <Grid display={"flex"}>
            <Typography variant="h3" color={"secondary"}>
              F
            </Typography>
            <StyledTypography variant="h4" color={"white"} sx={{ pt: 1.4 }}>
              ood
            </StyledTypography>
          </Grid>
          <Grid display={"flex"}>
            <Typography variant="h3" color={"secondary"}>
              M
            </Typography>
            <StyledTypography
              variant="h4"
              color={"white"}
              sx={{ pl: 0.2, pt: 1.4 }}
            >
              enu
            </StyledTypography>
          </Grid>
        </Grid>
        <StyledDivider variant="fullWidth" />
        <CardContent sx={{ boxShadow: "1px 4px #008b7c" }}>
          {menuList?.map((list, index) => (
            <List>
              <ListItem
                secondaryAction={
                  <Box justifyContent={"end"} display={"flex"} gap={2}>
                    <Grid item xs={3}>
                      <Tooltip title="Quantity" arrow>
                        <StyledTextFiled
                          name={list[1]?.name}
                          price={list[1]?.price}
                          onChange={(e) => {
                            e.target.value >= 11 || e.target.value < 0
                              ? e.preventDefault()
                              : handleCountAdd(e);
                          }}
                          value={list?.amount ?? 0}
                          size="small"
                          type={"number"}
                        />
                      </Tooltip>
                    </Grid>
                    <StyledButton
                      onClick={(e) => {
                        handleOrder(e);
                      }}
                      variant="contained"
                      endIcon={<AddShoppingCart />}
                      name={list[0]}
                    >
                      ADD to cart
                    </StyledButton>
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
                    <StyledTypography variant="h6">
                      {list[1]?.name}
                    </StyledTypography>
                  }
                  secondary={
                    <>
                      <StyledTypography>
                        {list[1]?.description}
                      </StyledTypography>
                      <StyledTypography variant="h5" fontWeight={"medium"}>
                        {"$" + " " + list[1]?.price}
                      </StyledTypography>
                    </>
                  }
                />
              </ListItem>

              {index !== 4 && <StyledDivider />}
            </List>
          ))}
        </CardContent>
        <CardActions>
          <Grid
            container
            display={"flex"}
            ml={2}
            color={"#008b7c"}
            alignItems="center"
            gap={1}
            justifyContent="space-between"
          >
            <Grid
              item
              display={"flex"}
              gap={1}
              textAlign="center"
              alignContent={"center"}
              alignItems="center"
            >
              <Typography
                variant="body1"
                fontWeight={"bolder"}
                color={"secondary"}
              >
                Follow us on :
              </Typography>
              <StyledIconButton>
                <Instagram />
              </StyledIconButton>
              <StyledIconButton>
                <Facebook />
              </StyledIconButton>
              <StyledIconButton>
                <YouTube />
              </StyledIconButton>
            </Grid>
            <Grid item>
              <StyledButton
                sx={{ color: "white", bgcolor: "black" }}
                fullWidth
                onClick={(e) => {
                  handleOrder(e);
                }}
                variant="contained"
                endIcon={<AddShoppingCart />}
              >
                add all to cart
              </StyledButton>
            </Grid>
          </Grid>
        </CardActions>
      </StyledMenuCard>
    </Grid>
  );
};

export default menuCard;
