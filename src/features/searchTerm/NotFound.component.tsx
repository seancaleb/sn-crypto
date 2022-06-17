import { ViewOffIcon } from "@chakra-ui/icons";
import { Center, Text, useColorModeValue } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hooks";

const NotFound = () => {
  const term = useAppSelector((state) => state.searchTerm.term);
  const color = useColorModeValue("gray.600", "gray.300");

  return (
    <Center {...styles.center}>
      <ViewOffIcon color={color} fontSize="24px" />
      <Text color={color}>No matching results for '{term}'.</Text>
    </Center>
  );
};

export default NotFound;

const styles = {
  center: {
    py: "180px",
    display: "flex",
    flexDir: "column" as const,
    gap: "5px",
  },
};
