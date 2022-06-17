import { Box, Button, Flex, GridItem, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { CoinStat, CoinTable, ErrorFallback, Main, Section } from "../../components";
import { useQueryGetCoins, useQueryGetGlobalData } from "../../hooks/queries";
import globalStyles from "../../theme/globalStyles";
import styles from "./Home.styles";

const HomePage = () => {
  const color = useColorModeValue("gray.600", "gray.300");
  const bg = useColorModeValue("gray.50", "blackAlpha.600");
  const navigate = useNavigate();

  return (
    <Main>
      {/* Hero  */}
      <Section pt="110px">
        <GridItem {...styles.hero__container} maxW="1440px" mx="auto" w="100%">
          <Heading {...styles.heading}>
            Supported Coins in the <Box {...styles.gradient}>Crypto Market</Box>
          </Heading>
          <Text {...styles.text} color={color}>
            Check out the latest trends in the cryptocurrency market and browse through a list of
            supported coins.
          </Text>
          <Button onClick={() => navigate("/coins")} {...globalStyles.button}>
            View coins
          </Button>
        </GridItem>

        <GridItem colSpan={12} maxW="1440px" m="auto" w="100%">
          {/* Global Crypto Data  */}
          <GlobalCryptoData />
        </GridItem>
      </Section>

      {/* Market Trends  */}
      <Section bg={bg} mb={0}>
        <GridItem colSpan={12} {...styles.wrapper}>
          <Flex flexDir="column" gap={{ base: "10px", sm: "15px" }} mb="40px">
            <Heading {...styles.section__heading}>Market Trends</Heading>
            <Text fontSize="18px" color={color}>
              The top trending coins as searched by users in the last 24 hours.
            </Text>
          </Flex>

          <Coins />
        </GridItem>
      </Section>
    </Main>
  );
};

export default HomePage;

function Coins() {
  const currency = useAppSelector((state) => state.filteredCurrency.currency);
  const { data, isSuccess, isLoading, error, isError, refetch } = useQueryGetCoins({
    trending: true,
    currency: currency?.name,
  });

  useEffect(() => {
    if (currency) refetch();
  }, [currency, refetch]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <CoinTable coins={data} {...{ isSuccess, isLoading, error, isError }} />
    </ErrorBoundary>
  );
}

function GlobalCryptoData() {
  const { data, isSuccess, isLoading, error, isError } = useQueryGetGlobalData();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <CoinStat coins={data} {...{ isSuccess, isLoading, error, isError }} />
    </ErrorBoundary>
  );
}
