import { Grid, GridItem, HStack, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import { VStack } from "@chakra-ui/react";
import React from "react";
import articulo_big_01 from "../assets/img/articulo_big_01.png";
import articulo_big_02 from "../assets/img/articulo_big_02.png";
import articulo_small_01 from "../assets/img/articulo_small_01.png";
import articulo_small_02 from "../assets/img/articulo_small_02.png";
import articulo_small_03 from "../assets/img/articulo_small_03.png";
import time from "../assets/iconos/time.png";

const Blog = () => {
  return (
    <VStack mt="-17rem" mb="6rem" alignItems="flex-start" pl="139px" pr="139px">
      <Text
        mt="100px"
        fontSize="24px"
        fontFamily="Montserrat"
        color="black"
        fontWeight="bold"
        textAlign="left"
        mb="20px"
        zIndex="0"
      >
        BLOG
      </Text>

      <Grid
        mx="auto"
        h="982px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        zIndex="0"
      >
        <GridItem rowSpan={3} colSpan={4} bg="transparent">
          <VStack position="relative">
            <Img
              src={articulo_big_01}
              alt="articulo_bir_01"
              objectFit="cover"
              borderRadius="5px"
              h="95%"
            />
            <Text
              color="white"
              fontFamily="Montserrat"
              fontWeight="bold"
              fontSize="16px"
              position="absolute"
              top="30px"
              left="40px"
            >
              CIUDAD
            </Text>
            <Text
              color="white"
              fontFamily="Montserrat"
              fontWeight="bold"
              fontSize="24px"
              position="absolute"
              top="280px"
              left="40px"
            >
              Artículo de puente
            </Text>
            <Text
              color="white"
              fontFamily="Montserrat"
              fontSize="16px"
              position="absolute"
              top="315px"
              left="40px"
            >
              Un puente es una construcción que permite salvar un accidente
              geográfico
            </Text>
            <HStack position="absolute" top="373px" left="40px">
              <Img src={time} alt="time" color="#CBD0D3" size="16px" />
              <Text fontSize="13px" fontFamily="Montserrat" color="#CBD0D3">
                Hace 2m
              </Text>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg="transparent">
          <VStack display="flex" alignItems="flex-start">
            <Img
              src={articulo_small_01}
              alt="aticulo_small_01"
              objectFit="cover"
              h="210px"
            />
            <Text
              fontSize="16px"
              fontWeight="bold"
              fontFamily="Montserrat"
              pt="6px"
            >
              Artículo de elefante
            </Text>
            <HStack>
              <Img src={time} alt="time" color="#CBD0D3" size="16px" />
              <Text fontSize="13px" fontFamily="Montserrat" color="#CBD0D3">
                Hace 3h
              </Text>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg="white">
          <VStack display="flex" alignItems="flex-start">
            <Img
              src={articulo_small_02}
              alt="aticulo_small_01"
              objectFit="cover"
              h="210px"
            />
            <Text
              fontSize="16px"
              fontWeight="bold"
              fontFamily="Montserrat"
              pt="6px"
            >
              Artículo de loro
            </Text>
            <HStack>
              <Img src={time} alt="time" color="#CBD0D3" size="16px" />
              <Text fontSize="13px" fontFamily="Montserrat" color="#CBD0D3">
                Hace 4h
              </Text>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem rowSpan={3} colSpan={4} bg="transparent">
          <Img
            src={articulo_big_02}
            alt="articulo_bir_02"
            objectFit="cover"
            borderRadius="5px"
            h="91%"
          />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg="white">
          <VStack display="flex" alignItems="flex-start">
            <Img
              src={articulo_small_03}
              alt="aticulo_small_01"
              objectFit="cover"
              h="210px"
            />
            <Text
              fontSize="16px"
              fontWeight="bold"
              fontFamily="Montserrat"
              pt="6px"
            >
              Artículo de camino
            </Text>
            <HStack>
              <Img src={time} alt="time" color="#CBD0D3" size="16px" />
              <Text fontSize="13px" fontFamily="Montserrat" color="#CBD0D3">
                Hace 8h
              </Text>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default Blog;
