import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import Cart from "./cart/Cart";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

function Header() {
  const [ShowCart, setShowCart] = useState(false);
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography className="text-white  w-full">redux-toolkit</Typography>
          <Box className=" flex flex-row justify-end  w-full">
            <Tooltip title="Open Cart">
              <IconButton
                onClick={() => {
                  setShowCart(!ShowCart);
                }}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <span className="mr-[30px]  ml-[-15px] mt-[-10px] ">
              {totalQuantity}
            </span>
            {ShowCart && <Cart {...{ ShowCart, setShowCart }} />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
