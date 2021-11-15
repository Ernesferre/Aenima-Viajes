import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./resources/theme/index";
// import { Box } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Trends from "./components/Trends";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const [isOpacity, setIsOpacity] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Box w={["360px", "1366px"]} mx="auto" opacity={isOpacity ? "0.7" : "1"}>
        <Navbar setIsOpacity={setIsOpacity} isOpacity={isOpacity} />
        <Body />
        <Trends />
        <Blog />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
