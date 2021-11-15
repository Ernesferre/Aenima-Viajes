import React from "react";
import { Img } from "@chakra-ui/image";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Box, Text, VStack, HStack } from "@chakra-ui/layout";
import Viajes_Hero from "../assets/img/Viajes_Hero.jpg";
import ic_pin from "../assets/iconos/ic_pin.png";
import arrow from "../assets/iconos/arrow.png";

const Body = () => {
  return (
    <VStack position="relative" mx="auto">
      <Img
        src={Viajes_Hero}
        alt="Viajes"
        h={["600px", "730px"]}
        objectFit="cover"
        mx="auto"
      />

      <VStack
        display="flex"
        spacing="20px"
        position="absolute"
        w={["290px", "580px"]}
        h="214px"
        top={["200px", "220px"]}
        left={["37px", "138px"]}
        pr={["20px", "0px"]}
        alignItems="flex-start"
        fontFamily="Montserrat"
        color="white"
      >
        <HStack spacing="20px">
          <Img src={ic_pin} alt="imagen" w={["12px", "24px"]} />

          <Text fontSize={["24px", "48px"]} fontWeight="bold">
            AMERICA DEL SUR
          </Text>
        </HStack>

        <Box
          bg="white"
          h="2px"
          w={["280px", "536px"]}
          position="absolute"
          top={["30px", "60px"]}
        ></Box>
        <Text fontWeight="bold" fontSize={["20px", "24px"]} pt="10px">
          Lugares Maravillosos por America del Sur
        </Text>
        <Text fontSize="16px" pt="10px" display={{ base: "none", md: "block" }}>
          Estos son algunos lugares que eligen la mayoria de los turistar que
          visitan America del Sur.
        </Text>
        <CircularProgress
          size={["50px", "65px"]}
          bg="white"
          borderRadius="full"
          position="absolute"
          top={["280px", "360px"]}
          left={["8px", "0px"]}
        >
          <CircularProgressLabel
            color="#2A3037"
            fontWeight="bold"
            fontSize="15px"
          >
            01
          </CircularProgressLabel>
        </CircularProgress>
        <Box
          bg="#FA6980"
          h="6px"
          w={["53px", "145px"]}
          position="absolute"
          top={["300px", "390px"]}
          left={["-38px", "-137px"]}
        ></Box>
        <Box
          d={["none", "block"]}
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
              color="#FA6980"
              p="20px 20px 6px 20px"
              fontWeight="bold"
              opacity="1"
            >
              PRÓXIMA AVENTURA
            </Text>
            <Img src={arrow} alt="imagen" size="24px" pr="5px" pt="10px" />
          </HStack>
          <Text fontWeight="bold" ml="20px" zIndex="1">
            Europa Meridional
          </Text>
          <Text fontSize="14px" ml="20px" mt="6px">
            Forman parte 20 paises, ej. España, Francia, etc.
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Body;
