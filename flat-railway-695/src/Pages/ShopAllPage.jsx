import { Grid, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";
import { NavLink } from "react-router-dom";
export default function ShopAllPage() {
  const [products, setProducts] = useState([]);
  let activeStyle = {
    textDecoration: "underline",
  };
  const fetchdata = () => {
    axios.get("https://vast-tor-66053.herokuapp.com/products").then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <Flex gap={5} py={20}>
      <Box w="15%" pl={10}>
        <Heading fontSize={25} borderBottom="1px solid black" pb={5} mb={10}>
          CATEGORIES
        </Heading>
        <Text
          mb={5}
          _hover={{
            pl: "10px",
            textDecoration: "underline",
            fontSize: "20px",
            color: "blue",
          }}
        >
          <NavLink
            to="/ShopAll"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shop All
          </NavLink>
        </Text>
        <Text
          mb={5}
          _hover={{
            pl: "10px",
            textDecoration: "underline",
            fontSize: "20px",
            color: "blue",
          }}
        >
          <NavLink
            to="/Bestseller"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Bestsellers
          </NavLink>
        </Text>
        <Text
          mb={5}
          _hover={{
            pl: "10px",
            textDecoration: "underline",
            fontSize: "20px",
            color: "blue",
          }}
        >
          <NavLink
            to="/SkinCare"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Skin Care
          </NavLink>
        </Text>
        <Text
          mb={5}
          _hover={{
            pl: "10px",
            textDecoration: "underline",
            fontSize: "20px",
            color: "blue",
          }}
        >
          <NavLink
            to="/BodyCare"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Body Care
          </NavLink>
        </Text>
        <Text
          mb={5}
          _hover={{
            pl: "10px",
            textDecoration: "underline",
            fontSize: "20px",
            color: "blue",
          }}
        >
          <NavLink
            to="/Perfumes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Perfumes
          </NavLink>
        </Text>
        <Text
          mb={5}
          _hover={{
            pl: "10px",
            textDecoration: "underline",
            fontSize: "20px",
            color: "blue",
          }}
        >
          <NavLink
            to="/ComboGifts"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Combos & Gifts
          </NavLink>
        </Text>
        <Text
          mb={5}
          _hover={{ pl: "10px", textDecoration: "underline", fontSize: "22px" }}
        >
          Build a Box
        </Text>
      </Box>
      <Box w="82%">
        <Heading textAlign="center" fontSize="28px" pb={5}>
          #ALL PRODUCTS
        </Heading>
        <Grid gridTemplateColumns="repeat(4,1fr)" gap={10} w="100%">
          {products && products.map((elem) => <Item key={elem.id} props={elem} />)}
        </Grid>
      </Box>
    </Flex>
  );
}
