import { CryptoGlobalData, QueryState } from "../../../types";
import CoinStatDataView from "./CoinStatDataView.component";

type CoinStatProps = {
  coins: CryptoGlobalData[] | undefined;
} & QueryState;

const CoinStat = ({ coins, isSuccess, isLoading, error, isError }: CoinStatProps): JSX.Element => {
  if ((isSuccess && coins) || isLoading)
    return <CoinStatDataView coins={coins} isLoading={isLoading} />;
  else if (isError) throw error;
  else return <></>;
};

export default CoinStat;
