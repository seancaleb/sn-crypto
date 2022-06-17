import {
  Flex,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Text,
  StatArrow,
  Stat,
} from "@chakra-ui/react";
import millify from "millify";
import styles from "./CoinTable.styles";
import { Coin } from "../../../types";
import Loader from "../Loader.component";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import NotFound from "../../features/searchTerm/NotFound.component";
import { useNavigate } from "react-router-dom";

type CoinTableDataViewProps = {
  coins: Coin[] | undefined;
  isLoading: boolean;
};

const placeholder = ["", "", "", "", "", "", ""] as any;

const CoinTableDataView = ({ coins, isLoading }: CoinTableDataViewProps) => {
  const bg = useColorModeValue("gray.50", "blackAlpha.400");

  return (
    <>
      <TableContainer>
        <Table {...styles.table}>
          <Thead bg={bg}>
            <Tr style={{ height: "60px" }}>
              <Th {...styles.th}>Name</Th>
              <Th {...styles.th}>Price</Th>
              <Th {...styles.th}>24h change</Th>
              <Th {...styles.th}>Market Cap</Th>
              <Th {...styles.th}>Market Rank</Th>
            </Tr>
          </Thead>
          <Tbody>
            <CoinsList coins={coins} isLoading={isLoading} />
          </Tbody>
        </Table>
      </TableContainer>

      {coins?.length === 0 && <NotFound />}
    </>
  );
};

export default CoinTableDataView;

function CoinsList({ coins = placeholder, isLoading }: CoinTableDataViewProps) {
  const bgHover = useColorModeValue("rgba(216, 68, 83, 0.25)", "rgba(216, 68, 83, 0.1)");
  const currency = useAppSelector((state) => state.filteredCurrency.currency);
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/coins/${id}`);
  };

  return (
    <>
      {coins.map((coin) => {
        return (
          <Tr
            key={coin.id || nanoid()}
            {...styles.tr}
            _hover={{ bg: bgHover }}
            onClick={() => handleNavigate(coin.id)}
          >
            <Td minW="275px">
              <Loader isLoaded={!isLoading} h={isLoading ? "1em" : "auto"}>
                <Flex gap="15px" alignItems="center">
                  <Image src={coin.image} {...styles.image} />
                  <Text>{coin.name}</Text>
                  <Text {...styles.text}>{coin.symbol?.toUpperCase().substring(0, 15)}</Text>
                </Flex>
              </Loader>
            </Td>

            <Td {...styles.td}>
              <Loader isLoaded={!isLoading}>
                {currency?.symbol} {coin.current_price?.toLocaleString() || 0}
              </Loader>
            </Td>

            <Td {...styles.td}>
              <Loader isLoaded={!isLoading}>
                <Stat>
                  <Flex gap="5px" alignItems="center">
                    <StatArrow
                      type={coin.price_change_percentage_24h < 0 ? "decrease" : "increase"}
                    />
                    <Text>{Math.abs(coin.price_change_percentage_24h)?.toFixed(2)}%</Text>
                  </Flex>
                </Stat>
              </Loader>
            </Td>

            <Td {...styles.td}>
              <Loader isLoaded={!isLoading}>
                {coin.market_cap ? millify(coin.market_cap) : "Not Specified"}
              </Loader>
            </Td>

            <Td>
              <Loader isLoaded={!isLoading}>{coin.market_cap_rank || "Not Specified"}</Loader>
            </Td>
          </Tr>
        );
      })}
    </>
  );
}
