import React from "react";
import { Img } from "@chakra-ui/image";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import Viajes_Hero from "../assets/img/Viajes_Hero.jpg";
// import ic_pin from "../assets/iconos/ic_pin.png";

const Body2 = () => {
  return (
    // <Box w="100%">
    <Stack
      w={["100", "50%"]}
      h="500px"
      bg="green"
      position="relative"
      display="flex"
      mx="auto"
    >
      <Text
        w="200px"
        h="200px"
        bg="yellow"
        position="absolute"
        top="150px"
        left="50px"
      ></Text>
    </Stack>
    // </Box>
  );
};

export default Body2;
