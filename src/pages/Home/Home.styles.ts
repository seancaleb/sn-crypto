import { As } from "@chakra-ui/react";

const styles = {
  hero__container: {
    colSpan: 12,
    mb: "60px",
    display: "flex",
    flexDir: "column" as const,
    alignItems: "flex-start",
    gap: "20px",
  },
  heading: {
    fontSize: {
      base: "36px",
      sm: "48px",
    },
    letterSpacing: "-.5px",
    maxW: "565px",
  },
  gradient: {
    as: "span" as As<any>,
    bgGradient: "linear(145deg, brand.primary, brand.secondary)",
    bgClip: "text",
  },
  text: {
    fontSize: "18px",
    maxW: "466px",
  },

  wrapper: {
    py: {
      base: "60px",
      "2xl": "110px",
    },
    flexDir: "column" as const,
    gap: "40px",
    maxW: "1440px",
    w: "100%",
    m: "auto",
    minH: "80vh",
  },
  section__heading: {
    fontSize: { base: "30px", sm: "36px" },
  },
};

export default styles;
