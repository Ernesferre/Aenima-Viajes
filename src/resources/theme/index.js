import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "black",
    secondary: "#1E1E1E",
    one: "#00C4C1",
    two: "#D1D3D4",
    three: "#9B9B9B",
    four: "#F5F5F5",
  },
};

const styles = {
  global: {
    "html, body": {
      bg: "white",
      color: "black",
    },
  },
};

export const theme = extendTheme({ colors, styles });
