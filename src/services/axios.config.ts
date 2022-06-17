import axios from "axios";

export const httpCurrency = axios.create({
  baseURL: "https://restcountries.com/v3.1/currency",
  headers: {
    "Content-type": "application/json",
  },
});

export default axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "Content-type": "application/json",
  },
});
