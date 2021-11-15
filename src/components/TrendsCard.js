import { Img } from "@chakra-ui/image";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";

const TrendsCards = ({ img, title, description, post }) => {
  return (
    <Box>
      <VStack
        w={["286px", "360px"]}
        m="5px"
        h="314px"
        mx="auto"
        bg="white"
        borderRadius="6px"
        boxShadow="md"
        display="flex"
        alignItems="flex-start"
        position="relative"
      >
        <Img
          src={img}
          alt="Trends"
          h="180px"
          objectFit="cover"
          w="100%"
          borderRadius="6px 6px 0 0"
        />
        {post ? (
          <Text
            w="83px"
            h="32px"
            as="span"
            bg="red.300"
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
          pl="25px"
          pt="28px"
        >
          {title}
        </Text>
        <Text
          color="#7A838D"
          fontSize="13px"
          fontFamily="Montserrat"
          pl="25px"
          pr="25px"
        >
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default TrendsCards;
