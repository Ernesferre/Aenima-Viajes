import { Img } from "@chakra-ui/image";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";

const TrendsCards = ({ img, title, description }) => {
  return (
    <Box>
      <VStack
        w="352px"
        h="314px"
        bg="white"
        borderRadius="10px"
        boxShadow="md"
        display="flex"
        alignItems="flex-start"
      >
        <Img src={img} alt="Trends" h="180px" objectFit="cover" />
        <Text
          fontSize="16px"
          fontFamily="Montserrat"
          fontWeight="bold"
          pl="33px"
          pt="20px"
        >
          {title}
        </Text>
        <Text
          color="#7A838D"
          fontSize="13px"
          fontFamily="Montserrat"
          // fontWeight="bold"
          pl="33px"
        >
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default TrendsCards;
