import { Box, HStack, VStack, Text } from "@chakra-ui/layout";
import React from "react";
import TrendsCard from "./TrendsCard";
import card_01 from "../assets/img/card_01.png";
import card_02 from "../assets/img/card_02.png";
import card_03 from "../assets/img/card_03.png";

const Trends = () => {
  return (
    <Box h="736px" bg="#EBEBEB" position="relative" mx="auto">
      <VStack
        // position="absolut"
        w="933px"
        h="314px"
        alignItems="flex-start"
        pl="139px"
        pr="139px"
      >
        <Text
          mt="100px"
          fontSize="24px"
          fontFamily="Montserrat"
          color="#2A3037"
          fontWeight="bold"
          textAlign="left"
          mb="20px"
        >
          TENDENCIAS
        </Text>
        <HStack spacing="16px">
          <TrendsCard
            img={card_01}
            title="Montañas y magia"
            description="Aqui la descripcion para Montañas y magia"
            post="NUEVO"
          />
          <TrendsCard
            img={card_02}
            title="Playa y sol"
            description="La descripcion de playas y sol debe ser ésta"
            post=""
          />
          <TrendsCard
            img={card_03}
            title="Nieve y aventura"
            description="Contiene la informacion de Nieve y aventura"
            post=""
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Trends;
