import { format } from "date-fns";
import { useQuery } from "react-query";
import { CoinPrice } from "../../../types";
import http from "../../services/axios.config";

type QueryProps = {
  id?: string;
  currency?: string;
  days?: number;
};

type CoinPricesDataAPI = {
  prices: [];
};

const fetchMarketData = async ({ id, currency, days }: QueryProps): Promise<CoinPrice[]> => {
  const data = (await (
    await http.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
  ).data) as CoinPricesDataAPI;

  const { prices: pricesData } = data;
  let prices: CoinPrice[] = [];

  prices = pricesData.map((price: [date: string, price: number]) => {
    const date = price[0];
    const formattedDate = format(new Date(date), "MMM d, Y — h:mm a");

    return {
      date: formattedDate,
      price: Number(price[1].toFixed(4)),
    };
  });

  return prices;
};

const useQueryGetMarketData = ({ id, currency, days }: QueryProps) => {
  return useQuery<CoinPrice[], Error>(
    [`coin-${id}`, currency, days],
    () => fetchMarketData({ id, currency, days }),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export default useQueryGetMarketData;
