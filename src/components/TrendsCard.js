import { Img } from "@chakra-ui/image";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";

const TrendsCards = ({ img, title, description, post }) => {
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
        position="relative"
      >
        <Img src={img} alt="Trends" h="180px" objectFit="cover" />
        {post ? (
          <Text
            w="83px"
            h="32px"
            as="span"
            bg="red.400"
            textAlign="center"
            color="white"
            fontWeight="bold"
            p="3px"
            borderRadius="6px"
            fontFamily="Montserrat"
            position="absolute"
            top="157"
            left="33px"
          >
            {post}
          </Text>
        ) : null}

        <Text
          fontSize="16px"
          fontFamily="Montserrat"
          fontWeight="bold"
          pl="33px"
          pt="28px"
        >
          {title}
        </Text>
        <Text color="#7A838D" fontSize="13px" fontFamily="Montserrat" pl="33px">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default TrendsCards;
