import {
  Flex,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import millify from "millify";
import { CryptoGlobalData } from "../../../types";
import Loader from "../Loader.component";
import styles from "./CoinStat.styles";

type CoinStatDataViewProps = {
  coins: CryptoGlobalData[] | undefined;
  isLoading: boolean;
};

const placeholder = ["", "", "", "", "", "", "", ""] as any;

const CoinStatDataView = ({ coins = placeholder, isLoading }: CoinStatDataViewProps) => {
  const bg = useColorModeValue("rgba(216, 68, 83, 0.25)", "rgba(216, 68, 83, 0.1)");

  return (
    <Grid {...styles.grid}>
      {coins?.map((coin) => {
        return (
          <GridItem key={nanoid()} colSpan={{ base: 12, sm: 6, lg: 3 }}>
            <Loader isLoaded={!isLoading} h={isLoading ? "1.2em" : "auto"}>
              <Flex {...styles.container} bg={bg}>
                <Text>{coin.name?.toUpperCase()}</Text>

                <Flex gap="20px">
                  <Stat {...styles.stat}>
                    <StatNumber {...styles.stat__number}>
                      {coin.total_market_cap && millify(coin.total_market_cap)}
                    </StatNumber>
                    <StatLabel {...styles.stat__label}>Market cap</StatLabel>
                  </Stat>

                  <Stat {...styles.stat}>
                    <StatNumber {...styles.stat__number}>
                      {" "}
                      {coin.total_volume && millify(coin.total_volume)}
                    </StatNumber>
                    <StatLabel {...styles.stat__label}>Volume</StatLabel>
                  </Stat>
                </Flex>
              </Flex>
            </Loader>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default CoinStatDataView;
