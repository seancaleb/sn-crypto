import { useQuery } from "react-query";
import { Coin, CoinId } from "../../../types";
import http from "../../services/axios.config";

type QueryProps = {
  page?: number;
  currency: string | undefined;
  trending?: boolean;
  term?: string | null | undefined;
};

type TrendingOrTermProps = {
  term: string | null | undefined;
};

const fetchCoinByTrendingOrTerm = async ({ term }: TrendingOrTermProps): Promise<CoinId[]> => {
  if (term) {
    const { coins } = await (await http.get(`/search?query=${term}`)).data;
    return coins.map((coin: CoinId) => coin.id);
  } else {
    const { coins } = await (await http.get("/search/trending")).data;
    return coins.map((coin: { item: { id: CoinId } }) => coin.item.id);
  }
};

const fetchCoins = async ({ page, currency, trending, term }: QueryProps) => {
  if (trending || term) {
    const trendingIds = fetchCoinByTrendingOrTerm({ term })
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
    let [...idsArray] = await trendingIds;
    const coinIds = idsArray.join(",");

    if (idsArray.length === 0) {
      return [];
    }

    return await (
      await http.get(
        `/coins/markets?vs_currency=${currency}&per_page=25&page=${page}&ids=${coinIds}`
      )
    ).data;
  }

  return await (
    await http.get(`/coins/markets?vs_currency=${currency}&per_page=25&page=${page}`)
  ).data;
};

const useQueryGetCoins = ({ page = 1, currency, trending = false, term }: QueryProps) => {
  return useQuery<Coin[], Error>(
    ["coins", currency, page, trending, term],
    () => fetchCoins({ page, currency, trending, term }),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
};

export default useQueryGetCoins;
