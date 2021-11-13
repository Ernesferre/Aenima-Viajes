import { Box } from "@chakra-ui/layout";
import Logo from "../assets/Logo/Logo_01.svg";
import { Heading, HStack, Spacer, Text, Img } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <HStack
        bg="white"
        position="sticky"
        top="0"
        zIndex="2"
        w="1366px"
        h="60px"
        mx="auto"
        pl="138px"
        pr="139px"
        boxShadow="lg"
      >
        <Img src={Logo} alt="logo" w="101px" h="18.62px" />

        <Spacer />
        <HStack fontFamily="Montserrat" spacing="33px" fontWeight={500}>
          <Text color="black" cursor="pointer">
            HOME
          </Text>
          <Text color="gray.400" cursor="pointer">
            TENDENCIAS
          </Text>
          <Text color="gray.400" cursor="pointer">
            BLOG
          </Text>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
