import { GridItem, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { CoinDetails, ErrorFallback, Main, Section } from "../../components";
import { initializeSelectedDay } from "../../features/days/daysSlice";
import { useQueryGetCoin } from "../../hooks/queries";
import styles from "./Coin.styles";

const CoinPage = () => {
  const bg = useColorModeValue("#fcfcfc", "blackAlpha.600");
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeSelectedDay());
  }, [location, dispatch]);

  return (
    <Main>
      <Section bg={bg} mb={0}>
        <GridItem colSpan={12} {...styles.wrapper}>
          <CoinInfo />
        </GridItem>
      </Section>
    </Main>
  );
};

export default CoinPage;

function CoinInfo() {
  const { coinId } = useParams();
  const { data, isSuccess, isLoading, isError, error } = useQueryGetCoin({ coinId });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <CoinDetails coin={data} {...{ isSuccess, isLoading, isError, error }} />
    </ErrorBoundary>
  );
}
