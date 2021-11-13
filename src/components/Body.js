import { Img } from "@chakra-ui/image";
import {
  Box,
  StackDivider,
  Text,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/layout";
import Viajes_Hero from "../assets/img/Viajes_Hero.jpg";
import ic_pin from "../assets/iconos/ic_pin.png";
import React from "react";

const Body = () => {
  return (
    // <VStack
    //   spacing="-30rem"
    // >
    <>
      <Box position="relative">
        <Img src={Viajes_Hero} alt="imagen" objectFit="cover" w="100%"></Img>

        <Stack
          // position="relative"
          w="720px"
          h="214.32"
          position="absolute"
          top="277px"
          left="200px"
          // // right="139px"
          // top="60px"
          // zIndex="0"
          bg="green"
          opacity="0.8"
        >
          <HStack spacing="20px">
            <Img src={ic_pin} alt="imagen" size="48px" />

            <Text
              fontSize="48px"
              fontWeight="bold"
              color="white"
              fontFamily="Montserrat"
            >
              AMERICA DEL SUR
            </Text>
          </HStack>
          <hr />
        </Stack>
      </Box>
    </>
    // </VStack>
  );
};

export default Body;
