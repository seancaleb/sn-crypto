import { As } from "@chakra-ui/react";

const styles = {
  container: {
    flexDir: "column" as const,
    gap: {
      base: "20px",
      md: "30px",
    },
  },
  wrapper: {
    flexDir: {
      base: "column" as const,
      md: "row" as const,
    },
    gap: {
      base: "20px",
      md: "30px",
    },
  },
  image: {
    w: "60px",
    h: "60px",
    alignSelf: "flex-start",
  },
  coin__name: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  coin__symbol: {
    fontSize: { base: "20px", sm: "24px" },
    fontWeight: "medium",
    bgGradient: "linear(145deg, brand.primary, brand.secondary)",
    bgClip: "text",
    as: "span" as As<any>,
    ml: "15px",
  },
};

export default styles;
