import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      bg: "white",
      color: "black",
    },
  },
};

export const theme = extendTheme({ styles });
