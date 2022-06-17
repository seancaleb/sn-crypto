import { As, Flex, GridItem, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { WarningFilled } from "@ant-design/icons";

type ErrorFallbackProps = {
  error: Error;
};

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  const color = useColorModeValue("gray.600", "gray.300");

  return (
    <GridItem colSpan={12}>
      <Flex {...styles.container}>
        <WarningFilled style={{ ...styles.icon }} />
        <Heading {...styles.title}>Something went wrong</Heading>
        <Text maxW="560px" color={color}>
          {error.message}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default ErrorFallback;

const styles = {
  container: {
    flexDir: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    h: "100%",
    p: "40px",
    textAlign: "center" as const,
  },
  icon: {
    color: "#DA4453",
    fontSize: "30px",
  },
  title: {
    as: "h4" as As<any>,
    fontSize: "20px",
    fontWeight: "medium",
  },
};
