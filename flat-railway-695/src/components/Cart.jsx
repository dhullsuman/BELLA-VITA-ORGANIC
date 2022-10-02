import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useContext, useState, useRef } from "react";
import { CartContext } from "../Context/Data";
import { Link } from "react-router-dom";
import CartPage from "../Pages/CartPage";

export default function Cart() {
  const { cartdata, setCartdata, total } = useContext(CartContext);
  const ref = useRef(null);
  const [qun, setQun] = useState(1);
  function DeleteItem(index) {
    cartdata.splice(index, 1);
    setCartdata(cartdata);
    setQun(qun);
  }
  return (
    <Box width="60%" h={600} m="auto" ref={ref}>
      <Flex>
        <Heading fontSize={20}>Your Cart </Heading>
        <Spacer />
        <Link to="/">Continue Shoping</Link>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb={5} h="10%">
        <Image
          src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Cart-Offer-Banner_CGlow-_-99_-V1.jpg?v=16227574376993221398"
          h="100%"
          w="70%"
        />
      </Flex>
      <Box h="10%">
        <Text fontStyle="bold" textAlign="center" fontWeight={800}>
          How to avail BOGO
        </Text>
        <Text textAlign="center" fontSize={13}>
          Step 1 - Add any TWO eligible products in your cart
        </Text>
        <Text textAlign="center" fontSize={13}>
          Step 2 - Proceed to checkout, the same or lower price item(s) will be
          FREE
        </Text>
      </Box>
      <Box
        width="100%"
        marginTop="40px"
        overflowY="scroll"
        h={cartdata.length > 0 ? "60%" : "0"}
      >
        {cartdata &&
          cartdata.map((elem, index) => (
            <CartPage
              props={elem}
              key={elem.id}
              index={index}
              Deletedata={DeleteItem}
            />
          ))}
      </Box>
      <Button
        display="flex"
        justifyContent="space-between"
        w="80%"
        fontSize={25}
        px="20%"
        margin="auto"
        h="5%"
        bg="blue"
        color="white"
        _hover={{ bg: "teal" }}
      >
        Checkout
        <Text as="span">|</Text>
        <Text as="span">₹ {total}.00</Text>
      </Button>
    </Box>
  );
}
