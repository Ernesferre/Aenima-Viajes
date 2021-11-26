// import { Img } from "@chakra-ui/image";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";

const TrendsCards = ({ id, title, color, description, date }) => {
  const currentDate = "26-11-2021";

  return (
    <Box>
      <VStack
        w={["286px", "360px"]}
        m="5px"
        h="314px"
        mx="auto"
        bg={color}
        borderRadius="6px"
        boxShadow="md"
        display="flex"
        alignItems="flex-start"
        position="relative"
        fontFamily="Montserrat"
      >
        {date === currentDate ? (
          <Text
            w="83px"
            h="32px"
            as="span"
            bg="#FA6980"
            textAlign="center"
            color="white"
            fontWeight="bold"
            p="3px"
            borderRadius="6px"
            position="absolute"
            top="157"
            left="33px"
          >
            Nuevo
          </Text>
        ) : null}

        <Text
          fontSize="16px"
          fontWeight="bold"
          color="#2A3037"
          pl="25px"
          pt="28px"
        >
          {title}
        </Text>
        <Text color="#7A838D" fontSize="13px" pl="25px" pr="25px">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default TrendsCards;
