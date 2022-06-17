import { CoinInfo, QueryState } from "../../../types";
import CoinDetailsDataView from "./CoinDetailsDataView.component";

type CoinDetailsProps = {
  coin: CoinInfo | undefined;
} & QueryState;

const CoinDetails = ({
  coin,
  error,
  isError,
  isLoading,
  isSuccess,
}: CoinDetailsProps): JSX.Element => {
  if ((isSuccess && coin) || isLoading) {
    return <CoinDetailsDataView coin={coin} isLoading={isLoading} />;
  } else if (isError) throw error;
  else return <></>;
};

export default CoinDetails;
