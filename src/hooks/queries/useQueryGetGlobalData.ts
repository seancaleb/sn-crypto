import { useQuery } from "react-query";
import { CryptoGlobalData } from "../../../types";
import http from "../../services/axios.config";

type CryptoGlobalDefaultCoins = {
  btc: number;
  eth: number;
  ltc: number;
  bnb: number;
  eos: number;
  xrp: number;
  xlm: number;
  link: number;
};

type CryptoGlobalDataAPI = {
  data: {
    total_market_cap: CryptoGlobalDefaultCoins;
    total_volume: CryptoGlobalDefaultCoins;
  };
};

const fetchGlobalData = async (): Promise<CryptoGlobalData[]> => {
  const data = (await (await http.get("/global")).data) as CryptoGlobalDataAPI;
  const {
    data: { total_market_cap, total_volume },
  } = data;

  return [
    {
      name: "btc",
      total_market_cap: total_market_cap.btc,
      total_volume: total_volume.btc,
    },
    {
      name: "eth",
      total_market_cap: total_market_cap.eth,
      total_volume: total_volume.eth,
    },
    {
      name: "ltc",
      total_market_cap: total_market_cap.ltc,
      total_volume: total_volume.ltc,
    },
    {
      name: "bnb",
      total_market_cap: total_market_cap.bnb,
      total_volume: total_volume.bnb,
    },
    {
      name: "eos",
      total_market_cap: total_market_cap.eos,
      total_volume: total_volume.eos,
    },
    {
      name: "xrp",
      total_market_cap: total_market_cap.xrp,
      total_volume: total_volume.xrp,
    },
    {
      name: "xlm",
      total_market_cap: total_market_cap.xlm,
      total_volume: total_volume.xlm,
    },
    {
      name: "link",
      total_market_cap: total_market_cap.link,
      total_volume: total_volume.link,
    },
  ];
};

const useQueryGetGlobalData = () => {
  return useQuery<CryptoGlobalData[], Error>(["crypto-global-data"], fetchGlobalData, {
    refetchOnWindowFocus: false,
  });
};

export default useQueryGetGlobalData;
