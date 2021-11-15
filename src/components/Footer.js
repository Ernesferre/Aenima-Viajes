import React from "react";
import { HStack, Spacer, Text, Img } from "@chakra-ui/react";
import instagram from "../assets/iconos/instagram.png";
import facebook from "../assets/iconos/facebook.png";

const Footer = () => {
  return (
    <HStack
      bg="#2A3037"
      my="-3rem"
      w={["360px", "1366px"]}
      h="96px"
      mx="auto"
      pl={["36px", "139px"]}
      pr={["36px", "139px"]}
      fontFamily="Montserrat"
      color="white"
    >
      <Text
        fontWeight="bold"
        fontSize="25px"
        letterSpacing="2px"
        h="30px"
        alignItems="center"
      >
        VIAJES
      </Text>

      <Spacer />
      <HStack spacing={["20px", "33px"]}>
        <Img src={instagram} alt="logo" w="18px" h="18px" cursor="pointer" />
        <Img src={facebook} alt="logo" w="18px" h="18px" cursor="pointer" />
      </HStack>
    </HStack>
  );
};

export default Footer;
