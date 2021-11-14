import { Img } from "@chakra-ui/image";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Box, Text, VStack, HStack } from "@chakra-ui/layout";
import Viajes_Hero from "../assets/img/Viajes_Hero.jpg";
import ic_pin from "../assets/iconos/ic_pin.png";
import arrow from "../assets/iconos/arrow.png";
import React from "react";

const Body = () => {
  return (
    <VStack position="relative">
      <Img src={Viajes_Hero} alt="Viajes" objectFit="cover" />

      <VStack
        display="flex"
        spacing="20px"
        position="absolute"
        w="580px"
        h="214px"
        top="220px"
        left="138px"
        alignItems="flex-start"
      >
        <HStack spacing="20px">
          <Img src={ic_pin} alt="imagen" size="48px" pt="15px" color="white" />

          <Text
            fontSize="48px"
            fontWeight="bold"
            color="white"
            fontFamily="Montserrat"
          >
            AMERICA DEL SUR
          </Text>
        </HStack>

        <Box bg="white" h="2px" w="535px" color="white">
          `
        </Box>
        <Text
          fontFamily="Montserrat"
          fontWeight="bold"
          color="white"
          fontSize="24px"
          pt="10px"
        >
          Lugares Maravillosos por America del Sur
        </Text>
        <Text
          fontFamily="Montserrat"
          color="white"
          fontSize="16px"
          pt="10px"
          // borderBottom="1px solid white"
        >
          Estos son algunos lugares que eligen la mayoria de los turistar que
          visitan America del Sur.
        </Text>
        <CircularProgress
          size="65px"
          bg="white"
          borderRadius="full"
          position="absolute"
          top="360px"
        >
          <CircularProgressLabel
            color="black"
            fontWeight="bold"
            fontSize="15px"
          >
            01
          </CircularProgressLabel>
        </CircularProgress>
        <Box
          bg="red.500"
          h="6px"
          w="140px"
          position="absolute"
          top="390px"
          left="-135px"
        ></Box>
        <Box
          w="260px"
          h="157px"
          bg="#2A3037 0% 0% no-repeat padding-box"
          opacity="0.6"
          position="absolute"
          top="260px"
          left="840px"
          border="2px dashed #FFFFFF"
          borderRadius="6px"
          borderWidth="2.7px"
          cursor="pointer"
        >
          <HStack pt="5px">
            <Text
              color="red.500"
              p="20px 20px 6px 20px"
              fontFamily="Montserrat"
              fontWeight="bold"
              opacity="1"
            >
              PRÓXIMA AVENTURA
            </Text>
            <Img src={arrow} alt="imagen" size="24px" pr="5px" pt="10px" />
          </HStack>
          <Text
            color="white"
            fontFamily="Montserrat"
            fontWeight="bold"
            ml="20px"
            zIndex="1"
          >
            Europa Meridional
          </Text>
          <Text
            color="white"
            fontFamily="Montserrat"
            fontSize="14px"
            ml="20px"
            mt="6px"
          >
            Forman parte 20 paises, ej. España, Francia, etc.
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Body;
