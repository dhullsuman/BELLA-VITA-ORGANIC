import { Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { FaSistrix } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <Flex
      w="100%"
      h="80px"
      alignItems="center"
      px={5}
      borderBottom="1px solid gray"
      position="sticky"
      top="0"
      transition="0.4s"
      zIndex="99"
      bg="white"
    >
      <Flex w="25%" h="100%">
        <Link to="/">
          <Image
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683"
            w="100%"
            h="100%"
          />
        </Link>
        <Spacer />
        <Image
          src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701"
          w="30%"
          h="100%"
        />
        <Spacer />
        <Image
          src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721"
          w="30%"
          h="100%"
        />
      </Flex>
      <Spacer />
      <Flex w="60%">
        <Text
          fontWeight="bold"
          borderLeft="1px solid gray "
          borderRight="1px solid gray"
          px={3}
          color="gray"
          _hover={{ textDecoration: "underline" }}
        >
          <NavLink
            to="/ShopAll"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SHOP ALL
          </NavLink>
        </Text>
        <Text
          fontWeight="bold"
          borderLeft="1px solid gray "
          borderRight="1px solid gray"
          px={3}
          color="gray"
          _hover={{ textDecoration: "underline" }}
        >
          <NavLink
            to="/Bestseller"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            BESTSELLERS
          </NavLink>
        </Text>
        <Text
          fontWeight="bold"
          borderLeft="1px solid gray "
          borderRight="1px solid gray"
          px={3}
          color="gray"
          _hover={{ textDecoration: "underline" }}
        >
          <NavLink
            to="/SkinCare"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SKIN CARE
          </NavLink>
        </Text>
        <Text
          fontWeight="bold"
          borderLeft="1px solid gray "
          borderRight="1px solid gray"
          px={3}
          color="gray"
          _hover={{ textDecoration: "underline" }}
        >
          <NavLink
            to="/BodyCare"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            BODY CARE
          </NavLink>
        </Text>
        <Text
          fontWeight="bold"
          borderLeft="1px solid gray "
          borderRight="1px solid gray"
          px={3}
          color="gray"
          _hover={{ textDecoration: "underline" }}
        >
          <NavLink
            to="/Perfumes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            PERFUMES
          </NavLink>
        </Text>
        <Text
          fontWeight="bold"
          borderLeft="1px solid gray "
          borderRight="1px solid gray"
          px={3}
          color="gray"
          _hover={{ textDecoration: "underline" }}
        >
          <NavLink
            to="/ComboGifts"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            COMBOS & GIFTS
          </NavLink>
          {/* <Link >
          
          </Link> */}
        </Text>
      </Flex>
      <Spacer />
      <Flex fontSize={30} w="10%">
        <FaSistrix />
        <Spacer />
        <Link to="/Login">
          <AiOutlineUser />
        </Link>
        <Spacer />
        <Link to={"/Cart"}>
        <AiOutlineShopping />
        </Link>
      </Flex>
    </Flex>
  );
}
