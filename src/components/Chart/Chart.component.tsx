import { Flex, Spinner } from "@chakra-ui/react";
import { CoinPrice, QueryState } from "../../../types";
import styles from "./Chart.styles";
import ChartDataView from "./ChartDataView.component";

type ChartProps = {
  data: CoinPrice[] | undefined;
  symbol: string | undefined;
} & QueryState;

const Chart = ({ data, symbol, error, isError, isLoading, isSuccess }: ChartProps): JSX.Element => {
  if ((isSuccess && data) || isLoading) {
    return (
      <Flex {...styles.container}>
        {!isLoading ? (
          <ChartDataView prices={data as CoinPrice[]} symbol={symbol} />
        ) : (
          <Spinner {...styles.spinner} />
        )}
      </Flex>
    );
  } else if (isError) throw error;
  else return <></>;
};

export default Chart;
