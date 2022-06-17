import { Flex, GridItem, Stat, StatArrow, Text, useColorModeValue } from "@chakra-ui/react";
import { useAppSelector } from "../app/hooks";
import Loader from "./Loader.component";

type PriceChangeProps = {
  label: string;
  priceChange:
    | {
        [key: string]: number;
      }
    | undefined;
};

const PriceChange = ({ label, priceChange }: PriceChangeProps) => {
  const currency = useAppSelector((state) => state.filteredCurrency.currency);
  const bgRed = useColorModeValue("rgba(130, 39, 39, .9)", "rgba(155, 44, 44, .25)");
  const bgGreen = useColorModeValue("rgba(34, 84, 61,.9)", "rgba(39, 103, 73, .25)");

  let price: number | undefined;

  if (currency && priceChange) {
    if (Object.keys(priceChange).length === 0) return <></>;
    price = priceChange[currency?.name.toLowerCase()];
  }

  return (
    <Loader
      {...styles.container}
      isLoaded={priceChange}
      h={!priceChange ? "30px" : "auto"}
      bg={(price as number) < 0 ? bgRed : bgGreen}
    >
      <Text {...styles.text}>{label}</Text>
      <Stat {...styles.stat}>
        <Flex gap="5px" alignItems="center">
          <StatArrow type={(price as number) < 0 ? "decrease" : "increase"} />
          <Text {...styles.text}>
            {priceChange && currency && Math.abs(price as number).toFixed(2)}%
          </Text>
        </Flex>
      </Stat>
    </Loader>
  );
};

export default PriceChange;

const styles = {
  container: {
    as: GridItem,
    colSpan: { base: 12, lg: 6 },
    py: 4,
    px: 6,
    display: "flex",
    bg: "blackAlpha.400",
    borderRadius: "3px",
    justifyContent: "space-between",
  },
  stat: {
    flex: "unset",
  },
  text: { color: "#fff" },
};
