import { As } from "@chakra-ui/react";

const styles = {
  footer: {
    as: "footer" as As<any>,
    py: "80px",
  },
  container: {
    maxW: "1440px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    h: "100%",
  },
  wrapper: {
    flexDir: "column" as const,
    gap: "15px",
    maxW: "560px",
    textAlign: "center" as const,
    fontSize: "15px",
  },
  link: {
    isExternal: true,
    href: "https://www.coingecko.com/en/api/documentation",
  },
  center: {
    _hover: {
      cursor: "pointer",
    },
  },
};

export default styles;
