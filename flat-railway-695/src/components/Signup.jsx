import { Box, Heading, Button, Input } from "@chakra-ui/react";
import { useContext, useReducer, useRef } from "react";
import { Account } from "../Context/Account";
import Footer from "./Footer";
import Navbar from "./Navbar";

let initialState = {
  fn: "",
  ln: "",
  email: "",
  password: "",
};
const render = (state, action) => {
  switch (action.type) {
    case "fn":
      return { ...state, fn: action.payload };
    case "ln":
      return { ...state, ln: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
export default function Signup() {
  const [state, dispatch] = useReducer(render, initialState);
  const ref = useRef("");
  const { SetData } = useContext(Account);
  function handledata() {
    SetData(state);
    ref.current.reset();
  }
  return (
    <>
      <Navbar />
      <Box w="40%" m="auto" p={20}>
        <Heading textAlign="center">Create account</Heading>
        <br />

        <br />
        <form isRequired ref={ref}>
          <Input
            type="text"
            placeholder="First name"
            border="2px solid black"
            onChange={(e) =>
              dispatch({ type: "fn", payload: `${e.target.value}` })
            }
          />
          <br />
          <br />
          <Input
            type="text"
            placeholder="Last name"
            border="2px solid black"
            onChange={(e) =>
              dispatch({ type: "ln", payload: `${e.target.value}` })
            }
          />
          <br />
          <br />
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
          onClick={handledata}
        >
          Create
        </Button>
      </Box>
      <Footer />
    </>
  );
}
