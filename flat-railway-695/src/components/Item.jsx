import { Box, Image, Badge, Spacer, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useContext, useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CartContext } from "../Context/Data";
export default function Item({ props }) {
  const { AddToCart } = useContext(CartContext);
  const ref = useRef(null);
  const {
    image1,
    image2,
    name,
    title,
    latest_price,
    origional_price,
    rating,
    off,
  } = props;
  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      position="relative"
      overflow="hidden"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      onMouseOver={() => {
        ref.current.src = image2;
      }}
      onMouseOut={() => {
        ref.current.src = image1;
      }}
    >
      <Image src={image1} w="100%" h={300} ref={ref} />
      {off ? (
        <Box
          display="flex"
          alignItems="baseline"
          position="absolute"
          top={0}
          w="100%"
          pr={5}
        >
          <Badge
            borderRadius="2px"
            px="2"
            py="2"
            color="black"
            bg="#e5f0da"
            fontSize={16}
          >
            BEST SELLER
          </Badge>
          <Spacer />
          <Badge
            borderRadius="2px"
            px="2"
            py="2"
            color="black"
            bg="#e5f0da"
            fontSize={16}
          >
            {off} <br />
            <Box as="span" color="gray.600" fontSize="sm">
              OFF
            </Box>
          </Badge>
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="baseline"
          position="absolute"
          top={0}
          w="100%"
          pr={5}
        >
          <Badge
            borderRadius="2px"
            px="4"
            py="2"
            color="black"
            bg="#e5f0da"
            fontSize={16}
          >
            BUY 1 GET 1 FREE!
          </Badge>
        </Box>
      )}

      <Badge
        borderRadius="50%"
        position="absolute"
        top="61%"
        left="6px"
        fontSize={30}
      >
        <AiOutlineHeart />
      </Badge>
      <Box px="6" overflowX="hidden">
        <Box mt="1" fontWeight="bold" as="h2" lineHeight="tight" noOfLines={1}>
          {name}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <Box
          display="flex"
          mt="2"
          alignItems="center"
          fontSize="sm"
          color="black"
          fontWeight="bold"
        >
          <Box>
            <Box as="span">₹</Box>
            {latest_price}
          </Box>
          <Spacer />
          {origional_price && (
            <Box textDecoration="line-through" fontSize="sm">
              <Box as="span">₹</Box>
              {origional_price}
            </Box>
          )}

          <Spacer />
          {rating && (
            <Box as="span" ml="2" display="flex" alignItems="center">
              {rating}
              <StarIcon color="black.500" ml="2" />
            </Box>
          )}
        </Box>
      </Box>
      <Button
        bg="#475d4b"
        color="#dbcb7c"
        _hover={{ bg: "#475d4d" }}
        w="100%"
        fontSize={22}
        onClick={() => AddToCart(props)}
      >
        ADD TO CART
      </Button>
    </Box>
  );
}
