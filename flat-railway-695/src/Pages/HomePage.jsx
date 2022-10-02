import SliderForImage from "../components/Slider";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import { Grid, Text, Flex, Heading, Image, Box } from "@chakra-ui/react";

export default function HomePage() {
  const [arr, setArr] = useState([]);
  const [solution, setsolution] = useState([]);
  const [data, setData] = useState([]);
  const [fragrance, setfragrance] = useState([]);

  const fetchdata = () => {
    axios.get("https://vast-tor-66053.herokuapp.com/spotlight").then((res) => {
      setArr(res.data);
    });
  };
  const fragrancedata = () => {
    axios.get("https://vast-tor-66053.herokuapp.com/fragrance").then((res) => {
      setfragrance(res.data);
    });
  };
  const bestsellerdata = () => {
    axios
      .get("https://vast-tor-66053.herokuapp.com/bestseller1")
      .then((res) => {
        setData(res.data);
      });
  };
  const solutiondata = () => {
    axios.get("https://vast-tor-66053.herokuapp.com/solution").then((res) => {
      setsolution(res.data);
    });
  };
  useEffect(() => {
    fetchdata();
    bestsellerdata();
    solutiondata();
    fragrancedata();
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "0 50px 0 50px",
          bg: "#e5f0da",
        }}
      >
        <Box my={10}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1200x399_9c065eb1-1986-4a47-a475-036b0bacc02e_1200x.jpg?v=1664274602"
            w="100%"
          />
        </Box>
        <Box>
          <Image
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Gifting-Hero-Banner-1200x235_1200x.jpg?v=1664376718"
            w="100%"
          />
        </Box>
        <Box my={10}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Offer-Strip-Banner_Cglow-_99_V1_1200x.jpg?v=1664540091"
            w="100%"
          />
        </Box>
        <Flex justifyContent="center" py={10} alignItems="center" gap={5}>
          <Text w="50px" h={0} border="1px solid gray"></Text>
          <Heading as="h2" fontSize={22}>
            BESTSELLERS
          </Heading>
          <Text w="50px" h={0} border="1px solid black"></Text>
        </Flex>
        <Grid
          gridTemplateColumns="repeat(4, 1fr)"
          columnGap={10}
          w="100%"
          gridTemplateRows={1}
          mb={20}
        >
          {data && data.map((elem) => <Item key={elem.id} props={elem} />)}
        </Grid>
        <div>
          <Flex justifyContent="center" py={10} alignItems="center" gap={5}>
            <Text w="50px" h={0} border="1px solid gray"></Text>
            <Heading as="h2" fontSize={22}>
              IN THE SPOTLIGHT
            </Heading>
            <Text w="50px" h={0} border="1px solid black"></Text>
          </Flex>
          {arr.length > 0 && <SliderForImage Data={arr} total={5} />}
        </div>
        <div>
          <Flex justifyContent="center" py={10} alignItems="center" gap={5}>
            <Text w="50px" h={0} border="1px solid gray"></Text>
            <Heading as="h2" fontSize={22}>
              FIND SOLUTINOS FOR
            </Heading>
            <Text w="50px" h={0} border="1px solid black"></Text>
          </Flex>
          {solution.length > 0 && <SliderForImage Data={solution} total={5} />}
        </div>
        <div>
          <Flex justifyContent="center" py={10} alignItems="center" gap={5}>
            <Text w="50px" h={0} border="1px solid gray"></Text>
            <Heading as="h2" fontSize={22}>
              LUXURY FRAGRANCES
            </Heading>
            <Text w="50px" h={0} border="1px solid black"></Text>
          </Flex>
        </div>
        <Flex columnGap={5} pb={10}>
          {fragrance &&
            fragrance.map((elem) => (
              <Image w="19%" src={elem.image1} h={300} borderRadius={10} />
            ))}
        </Flex>
        <Box p={10}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brand-Comms-banner-V2_900x.jpg?v=1660051394"
            w="100%"
          />
        </Box>
        <Box p={10}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bella-Cash-Section-Desktop-v1_900x.jpg?v=1660051412"
            w="100%"
          />
        </Box>
      </div>
    </>
  );
}
