import { As } from "@chakra-ui/react";

const styles = {
  header: {
    as: "header" as As<any>,
    h: "60px",
    pos: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    borderBottom: "1px solid",
    zIndex: 99,
  },
  container: {
    maxW: {
      base: "100%",
      xl: "98%",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    h: "100%",
  },
  logo: {
    bgGradient: "linear(145deg, brand.primary, brand.secondary)",
    bgClip: "text",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  link: {
    fontSize: "14px",
    _hover: {
      color: "brand.primary",
    },
  },
  divider: {
    h: "20px",
    orientation: "vertical" as const,
  },
  icon: {
    boxSize: "14px",
  },
};

export default styles;
