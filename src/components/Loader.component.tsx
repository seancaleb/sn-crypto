import { Skeleton, useColorModeValue } from "@chakra-ui/react";

type LoaderProps = {
  children: React.ReactNode;
  [props: string]: any;
};

const Loader = ({ children, ...props }: LoaderProps) => {
  const startColor = useColorModeValue("gray.300", "gray.800");
  const endColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Skeleton {...styles.skeleton} {...props} startColor={startColor} endColor={endColor}>
      {children}
    </Skeleton>
  );
};

export default Loader;

const styles = {
  skeleton: {
    fadeDuration: 0.2,
    h: "1em",
  },
};
