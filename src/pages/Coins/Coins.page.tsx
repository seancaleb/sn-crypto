import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Flex, GridItem, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useAppSelector } from "../../app/hooks";
import { CoinTable, ErrorFallback, Main, Section } from "../../components";
import SearchCoin from "../../features/searchTerm/SearchCoin.component";
import { useQueryGetCoins } from "../../hooks/queries";
import styles from "./Coins.styles";

const CoinsPage = () => {
  const color = useColorModeValue("gray.600", "gray.300");
  const bg = useColorModeValue("#fcfcfc", "blackAlpha.600");

  return (
    <Main>
      <Section bg={bg} mb={0}>
        <GridItem colSpan={12} {...styles.wrapper}>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            gap="15px"
            mb="40px"
          >
            <Flex flexDir="column" gap={{ base: "10px", sm: "15px" }}>
              <Heading {...styles.section__heading}>Coin Market</Heading>
              <Text fontSize="18px" color={color}>
                List of all coins in the market.
              </Text>
            </Flex>

            {/* Search for a coin  */}
            <SearchCoin />
          </Flex>

          {/* <CoinTable /> */}
          <Coins />
        </GridItem>
      </Section>
    </Main>
  );
};

export default CoinsPage;

function Coins() {
  const [page, setPage] = useState<number>(1);

  const currency = useAppSelector((state) => state.filteredCurrency.currency);
  const term = useAppSelector((state) => state.searchTerm.term);
  const { data, isSuccess, isLoading, error, isError, refetch } = useQueryGetCoins({
    page,
    currency: currency?.name,
    term,
  });

  useEffect(() => {
    if ((currency && page) || term) refetch();
  }, [currency, page, refetch, term]);

  useEffect(() => {
    if (term) setPage(1);
    window.scrollTo(0, 0);
  }, [page, term]);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <CoinTable coins={data} {...{ isSuccess, isLoading, error, isError }} />
      </ErrorBoundary>

      {!term && (
        <Flex {...styles.button__container}>
          <Button
            {...styles.button}
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            leftIcon={<ArrowLeftIcon fontSize="10px" />}
          >
            Previous
          </Button>
          <Button
            {...styles.button}
            onClick={() => setPage((prev) => prev + 1)}
            rightIcon={<ArrowRightIcon fontSize="10px" />}
          >
            Next
          </Button>
        </Flex>
      )}
    </>
  );
}
