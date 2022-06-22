import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import { CoinInfo } from "../../../types";
import { useAppSelector } from "../../app/hooks";
import SelectDays from "../../features/days/SelectDays.component";
import { useQueryGetMarketData } from "../../hooks/queries";
import Chart from "../Chart/Chart.component";
import CoinCategories from "../CoinCategories.component";
import ErrorFallback from "../ErrorFallback.component";
import Loader from "../Loader.component";
import PriceChange from "../PriceChange.component";
import styles from "./CoinDetails.styles";

type CoinDetailsDataViewProps = {
  coin: CoinInfo | undefined;
  isLoading: boolean;
};

const CoinDetailsDataView = ({ coin, isLoading }: CoinDetailsDataViewProps) => {
  const currency = useAppSelector((state) => state.filteredCurrency.currency);
  const color = useColorModeValue("gray.600", "gray.300");

  const currentPrice = Number(
    coin?.market_data.current_price[currency?.name.toLowerCase()!]
  ).toFixed(2);

  return (
    <Flex {...styles.container}>
      <Flex {...styles.wrapper}>
        <Loader
          isLoaded={!isLoading}
          h={isLoading ? "60px" : "auto"}
          alignSelf="flex-start"
          borderRadius="50%"
        >
          <Image src={coin?.image.large} {...styles.image} borderRadius="50%" />
        </Loader>

        <VStack align="flex-start" flex={1}>
          <Loader
            isLoaded={!isLoading}
            h={isLoading ? "30px" : "auto"}
            w={isLoading ? "250px" : "auto"}
          >
            <HStack spacing="15px">
              <Heading {...styles.coin__name} maxW="767px">
                {coin?.name}
                <Box {...styles.coin__symbol}>{coin?.symbol.toUpperCase()}</Box>
              </Heading>
            </HStack>
          </Loader>

          <Loader
            isLoaded={!isLoading}
            h={isLoading ? "20px" : "auto"}
            w={isLoading ? "75px" : "auto"}
          >
            <Text
              fontSize="20px"
              fontWeight="medium"
              color="brand.primary"
              bgGradient="linear(145deg, brand.primary, brand.secondary)"
              bgClip="text"
            >
              {currency?.symbol} {Number(currentPrice).toLocaleString()}
            </Text>
          </Loader>

          <Loader isLoaded={!isLoading} h={isLoading ? "1em" : "auto"}>
            <Text color={color} maxW="767px">
              {coin?.name} ({coin?.symbol.toUpperCase()}) live price in {currency?.fullName} (
              {currency?.name}). View the price statistics below.
            </Text>
          </Loader>
        </VStack>
      </Flex>

      <Divider />

      {/* Coin Categories  */}
      <CoinCategories categories={coin?.categories} />

      {/* Chart  */}
      <ChartData />

      {/* Select days filter  */}
      <SelectDays />

      {/* Price Change Percentage  */}
      <VStack alignItems="flex-start" mt="60px" spacing="10px">
        <Heading fontSize="24px">Price Change Percentage</Heading>
        <HStack w="100%" spacing="20px">
          <Text flex={1} color={color} maxW="767px">
            This is the price performance of {coin?.name} ({coin?.symbol.toUpperCase()}). It shows
            the percentage gains and losses for each time period.
          </Text>
          <Box flex={1} display={{ base: "none", lg: "block" }} />
        </HStack>

        <Grid templateColumns="repeat(12,1fr)" pt="10px" w="100%" columnGap="20px" rowGap="10px">
          <PriceChange
            label="Last hour"
            priceChange={coin?.market_data.price_change_percentage_1h_in_currency}
          />
          <PriceChange
            label="Last 24 hours"
            priceChange={coin?.market_data.price_change_percentage_24h_in_currency}
          />
          <PriceChange
            label="Last 7 days"
            priceChange={coin?.market_data.price_change_percentage_7d_in_currency}
          />
          <PriceChange
            label="Last 14 days"
            priceChange={coin?.market_data.price_change_percentage_14d_in_currency}
          />
          <PriceChange
            label="Last 30 days"
            priceChange={coin?.market_data.price_change_percentage_30d_in_currency}
          />
          <PriceChange
            label="Last 60 days"
            priceChange={coin?.market_data.price_change_percentage_60d_in_currency}
          />
          <PriceChange
            label="Last 200 days"
            priceChange={coin?.market_data.price_change_percentage_200d_in_currency}
          />
          <PriceChange
            label="Last year"
            priceChange={coin?.market_data.price_change_percentage_1y_in_currency}
          />
        </Grid>
      </VStack>
    </Flex>
  );
};
export default CoinDetailsDataView;

function ChartData() {
  const { value: days } = useAppSelector((state) => state.days.selected);
  const currency = useAppSelector((state) => state.filteredCurrency.currency);
  const params = useParams();
  const { data, isSuccess, isLoading, isError, error } = useQueryGetMarketData({
    currency: currency?.name,
    days,
    id: params.coinId,
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Chart {...{ data, isSuccess, isLoading, isError, error }} symbol={currency?.symbol} />
    </ErrorBoundary>
  );
}
