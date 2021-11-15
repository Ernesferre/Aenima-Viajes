import { Box, ListItem, UnorderedList } from "@chakra-ui/layout";
import Logo from "../assets/Logo/Logo_01.svg";
import { HStack, Spacer, Text, Img } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

import React, { useState } from "react";

const Navbar = ({ setIsOpacity, isOpacity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setIsOpacity(!isOpacity);
  };

  console.log(isOpen);

  return (
    <>
      {/* Desktop Layout */}

      <HStack
        d={{ base: "none", md: "flex" }}
        bg="white"
        position="sticky"
        top="0"
        zIndex="2"
        w={["360px", "1366px"]}
        h="60px"
        mx="auto"
        pl="138px"
        pr="138px"
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

      {/* Mobile Layout */}

      <HStack
        d={{ base: "flex", md: "none" }}
        justifyContent="space-between"
        bg="white"
        position="sticky"
        top="0"
        zIndex="2"
        w="360px"
        h="60px"
        pl="36px"
        pr="36px"
        boxShadow="lg"
      >
        <Img src={Logo} alt="logo" w="100px" h="18.62px" />

        <Box>
          <GiHamburgerMenu size="22px" onClick={handleOpen} position="fixed" />
          {isOpen && (
            <Box
              w="250px"
              h="900px"
              bg="white"
              mx="auto"
              position="absolute"
              top="0px"
              left="150px"
            >
              <Text
                textAlign="right"
                fontSize="23px"
                cursor="pointer"
                pr="80px"
                pt="13px"
                onClick={handleOpen}
                mb="25px"
              >
                {" "}
                X{" "}
              </Text>
              <UnorderedList
                listStyleType="none"
                fontFamily="Montserrat"
                fontWeight="bold"
              >
                <ListItem cursor="pointer" mb="1rem">
                  HOME
                </ListItem>
                <ListItem cursor="pointer" mb="1rem">
                  TENDENCIAS
                </ListItem>
                <ListItem cursor="pointer" mb="1rem">
                  BLOG
                </ListItem>
              </UnorderedList>
            </Box>
          )}
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
