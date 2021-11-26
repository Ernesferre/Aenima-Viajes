import { Box, HStack, VStack, Text } from "@chakra-ui/layout";
import customFetch from "../utils/customFetch";
import React, { useState, useEffect } from "react";
import TrendsCard from "./TrendsCard";
import card_01 from "../assets/img/card_01.png";
import card_02 from "../assets/img/card_02.png";
import card_03 from "../assets/img/card_03.png";
const { data } = require("../utils/data");

const Trends = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    customFetch(data)
      .then((result) => setProduct(result))
      .catch((err) => console.log(err));
  }, []);

  console.log(product);

  return (
    <>
      <Box
        d={{ base: "none", md: "flex" }}
        h="736px"
        bg="#EBEBEB"
        position="relative"
      >
        <VStack
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
            {product.length > 0 ? (
              product.map((item) => (
                <TrendsCard
                  key={item.id}
                  title={item.title}
                  color={item.color}
                  description={item.description}
                  date={item.date}
                />
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Trends;
