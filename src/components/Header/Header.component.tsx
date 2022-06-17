import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import Currency from "../../features/currencies/Currency.component";
import styles from "./Header.styles";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#eee", "#333");
  const bg = useColorModeValue("white", "gray.800");
  const navigate = useNavigate();

  return (
    <Box {...styles.header} borderBottomColor={borderColor} bg={bg}>
      <Container {...styles.container}>
        <Flex alignItems="center" gap={{ base: "20px", sm: "30px" }}>
          <Text {...styles.logo} onClick={() => navigate("/")}>
            SNCrypto
          </Text>
          <Link as={ReachLink} to="coins" {...styles.link} color={color}>
            Coins
          </Link>
        </Flex>

        <Flex alignItems="center" gap="15px">
          <Currency />
          <Divider {...styles.divider} />
          <Button onClick={() => toggleColorMode()}>
            {colorMode === "dark" ? <MoonIcon {...styles.icon} /> : <SunIcon {...styles.icon} />}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
