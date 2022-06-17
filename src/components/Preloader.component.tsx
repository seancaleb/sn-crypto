import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { BallTriangle } from "react-loader-spinner";

const Preloader = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Flex {...styles.container} bg={bg}>
      <BallTriangle {...styles.animated__svg} />
      <Heading {...styles.text} color={color}>
        SN CRYPTO
      </Heading>
    </Flex>
  );
};

export default Preloader;

const styles = {
  container: {
    pos: "fixed" as const,
    top: 0,
    left: 0,
    minH: "100vh",
    w: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    gap: "10px",
  },
  text: {
    color: "#000",
    fontSize: "24px",
    fontWeight: "bold",
  },
  animated__svg: {
    width: "50",
    height: "50",
    color: "#dA4453",
    ariaLabel: "loading-indicator",
  },
};
