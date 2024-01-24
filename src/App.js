import { Grid, Modal, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { getCartList } from "./api/axios";
import AppBar from "./app/components/appBar";
import MenuCard from "./app/components/menuCard";

import bg from "./app/assets/bgimage.jpg";
import {
  StyledCard,
  SuccessDialogContent,
} from "./app/components/SyledComponents";
import theme from "./app/Theme/theme";

function App() {
  //State
  const [menuList, setMenuList] = useState([]);
  const [menuCount, setMenuConut] = useState({});
  const [info, setInfo] = useState({});
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState({});
  const [orderOpen, setOrderOpen] = useState(false);
  const [message, setMessage] = useState("");

  ///handler
  let val = 0;
  const handleCountAdd = (e) => {
    const { name, value } = e.target;

    setMenuConut({
      ...menuCount,
      [name]: value,
    });
    menuList?.map((list, index) => {
      if (name === list[1].name) {
        let copyOfMenuList = [...menuList];
        copyOfMenuList[index].amount = parseInt(value);
        copyOfMenuList[index].totalPrice = parseFloat(
          value * parseFloat(list[1].price)
        );
        setMenuList(copyOfMenuList);
      }
    });
  };

  const handleOrder = (e) => {
    let counts = Object.values(menuCount);

    counts?.map((value) => (val += Number(value)));
    console.log(count);

    if (count >= 30) {
      setMessage("Maximum  Orders Reached !!!");
      setOrderOpen(!orderOpen);
    } else {
      setMessage("");

      setCount(val);
    }
  };

  const handleModal = () => {
    setOpen(!open);
  };

  const handleModalClose = () => {
    setOpen(!open);
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;

    if (value.length === 0) {
      setError({
        ...error,
        [name]: true,
      });
    } else {
      setError({
        ...error,
        [name]: false,
      });
    }
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handlePlaceOrder = () => {
    setOrderOpen(!orderOpen);
    setCount(0);
  };

  const handleOrderClose = () => {
    setOrderOpen(!orderOpen);
    setOpen(false);
    setInfo({});
  };

  //useEffect
  useEffect(() => {
    getCartList()
      .then((response) => {
        let menu = response?.data;
        var array = Object.entries(menu);

        setMenuList(array);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{
          height: "104vh",
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AppBar
          handleModalClose={handleModalClose}
          menuList={menuList}
          open={open}
          handleModal={handleModal}
          count={count}
          menuCount={menuCount}
          handlePlaceOrder={handlePlaceOrder}
          handleInfoChange={handleInfoChange}
          info={info}
          handleCountAdd={handleCountAdd}
          error={error}
        />
        <MenuCard
          handleOrder={handleOrder}
          menuList={menuList}
          handleCountAdd={handleCountAdd}
          count={count}
        />

        <Modal open={orderOpen} close={handleOrderClose}>
          <StyledCard>
            <SuccessDialogContent
              message={message}
              handleOrderClose={handleOrderClose}
            />
          </StyledCard>
        </Modal>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
