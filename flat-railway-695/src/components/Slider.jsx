import { useState } from "react";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

export default function SliderForImage(props) {
  const { Data, total } = props;
  console.log(Data);
  const [currIndex, setCurrIndex] = useState(0);
  const dotcontain = {
    display: "flex",
    justifyContent: "center",
  };
  const dotSlide = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };
  const gotoslide = (index) => {
    setCurrIndex(index);
  };
  if (!Data) return;
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} color="gray">
        <GridItem
          w="100%"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Image w="100%" h="300" bg="blue.500" src={Data[currIndex].image1} />
          <Text
            w="100%"
            bg="#e5f0da"
            textAlign="center"
            borderTop="1px solid black"
            py={2}
          >
            {Data[currIndex].name}
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Image
            w="100%"
            h="300"
            bg="blue.500"
            src={Data[currIndex + 1].image1}
          />
          <Text
            w="100%"
            bg="#e5f0da"
            textAlign="center"
            borderTop="1px solid black"
            py={2}
          >
            {Data[currIndex + 1].name}
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Image
            w="100%"
            h="300"
            bg="blue.500"
            src={Data[currIndex + 2].image1}
          />
          <Text
            w="100%"
            bg="#e5f0da"
            textAlign="center"
            borderTop="1px solid black"
            py={2}
          >
            {Data[currIndex + 2].name}
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Image
            w="100%"
            h="300"
            bg="blue.500"
            src={Data[currIndex + 3].image1}
          />
          <Text
            w="100%"
            bg="#e5f0da"
            textAlign="center"
            borderTop="1px solid black"
            py={2}
          >
            {Data[currIndex + 3].name}
          </Text>
        </GridItem>
      </Grid>
      <div style={dotcontain}>
        {new Array(total).fill(3).map((slide, index) => (
          <div
            key={slide.index}
            style={dotSlide}
            onClick={() => gotoslide(index)}
          >
            ◎
          </div>
        ))}
      </div>
    </>
  );
}
