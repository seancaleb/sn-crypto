import { GithubFilled } from "@ant-design/icons";
import { Box, Center, Container, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import styles from "./Footer.styles";

const Footer = () => {
  const color = useColorModeValue("gray.500", "gray.600");
  const linkColor = useColorModeValue("gray.800", "white");
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box {...styles.footer} bg={bg}>
      <Container {...styles.container}>
        <Flex {...styles.wrapper}>
          <Text color={color}>
            This is just a demo crypto application that uses the The CoinGecko API. You can learn
            more about the API documentation{" "}
            <Link {...styles.link} color={linkColor}>
              here
            </Link>
            .
          </Text>

          <Text color={color}>Made by Sean Caleb - © 2022</Text>

          <Center {...styles.center}>
            <GithubFilled style={{ fontSize: "30px" }} />
          </Center>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
