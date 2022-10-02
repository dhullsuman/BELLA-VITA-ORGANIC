import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useContext, useReducer, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { Account } from "../Context/Account";
import Footer from "./Footer";
import Navbar from "./Navbar";

let initialState = {
  email: "",
  password: "",
};
const render = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
export default function Login() {
  const [state, dispatch] = useReducer(render, initialState);
  const { checkdata, islogin } = useContext(Account);
  const ref = useRef("");

  if (islogin) return <Navigate to={"/"} />;
  return (
    <>
      <Navbar />
      <Box w="40%" m="auto" p={20}>
        <Heading textAlign="center">Login</Heading>
        <br />
        <Text textAlign="center" fontSize={20}>
          To redeem your cashback you must be logged in
        </Text>
        <br />
        <form ref={ref}>
          <Input
            type="email"
            placeholder="Email"
            border="2px solid black"
            onChange={(e) =>
              dispatch({ type: "email", payload: `${e.target.value}` })
            }
          />
          <br />
          <br />
          <Input
            type="password"
            placeholder="Password"
            border="2px solid black"
            onChange={(e) =>
              dispatch({ type: "password", payload: `${e.target.value}` })
            }
          />
          <br />
          <br />
          <Text textDecoration="underline">Forgot your password?</Text>
          <br />
        </form>
        <Button
          display="block"
          m="auto"
          bg="#475d4b"
          color="#e5f0da"
          fontSize={20}
          px={20}
          _hover={{ bg: "#475d4b" }}
          borderRadius="15px"
          onClick={() => checkdata(state)}
        >
          Sign in
        </Button>
        <br />
        <Text textDecoration="underline" textAlign="center">
          <Link to={"/Signup"}>Create account</Link>
        </Text>
      </Box>
      <Footer />
    </>
  );
}
