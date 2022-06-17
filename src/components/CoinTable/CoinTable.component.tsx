import { Coin, QueryState } from "../../../types";
import CoinTableDataView from "./CoinTableDataView.component";

type CoinTableProps = {
  coins: Coin[] | undefined;
} & QueryState;

const CoinTable = ({
  coins,
  isSuccess,
  isLoading,
  error,
  isError,
}: CoinTableProps): JSX.Element => {
  if ((isSuccess && coins) || isLoading)
    return <CoinTableDataView coins={coins} isLoading={isLoading} />;
  else if (isError) throw error;
  else return <></>;
};

export default CoinTable;
