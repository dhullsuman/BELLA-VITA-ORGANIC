import { Box, Button, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";

export default function CartPage({ props, index, Deletedata }) {
  const { image1, name, latest_price } = props;
  return (
    <Flex h="300px" w="100%" alignItems="center" px={10} margin="auto" border="1px solid gray" mb={10}>
      <Box w="30%"  h="90%">
        <Image src={image1} h="100%" />
      </Box>
      <Spacer/>
      <Box w="50%">
        <Heading noOfLines={1} overflow="hidden">
          {name}
        </Heading>
        <Text fontSize={20} fontWeight="bold">
          ₹{latest_price}
        </Text>
      </Box>
      <Spacer/>
      <Button onClick={() => Deletedata(index)} bg="blue" color="white" _hover={{bg:"teal"}}>Delete</Button>
    </Flex>
  );
}
