import { As, Box } from "@chakra-ui/react";

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <Box {...styles.main}>{children}</Box>;
};

export default Main;

const styles = {
  main: {
    as: "main" as As<any>,
    pt: "60px",
  },
};
