import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = { initialColorMode: "dark", useSystemColorMode: false };
const colors = {
  brand: {
    primary: "#DA4453",
    secondary: "#89216B",
  },
};
const fonts = {
  heading: "HelveticaNeue",
  body: "HelveticaNeue",
};

export default extendTheme({
  config,
  colors,
  fonts,

  // Components
  components: {},
});
