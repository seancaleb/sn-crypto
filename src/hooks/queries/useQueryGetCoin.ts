import { useQuery } from "react-query";
import { CoinInfo } from "../../../types";
import http from "../../services/axios.config";

type QueryProps = {
  coinId: string | undefined;
};

const fetchCoin = async ({ coinId }: QueryProps): Promise<CoinInfo> =>
  await (
    await http.get(`/coins/${coinId}?tickers=false&developer_data=false&localization=false`)
  ).data;

const useQueryGetCoin = ({ coinId }: QueryProps) => {
  return useQuery<CoinInfo, Error>([`coin-${coinId}`], () => fetchCoin({ coinId }), {
    refetchOnWindowFocus: false,
  });
};

export default useQueryGetCoin;
