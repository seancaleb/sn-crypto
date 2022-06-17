import MyRoutes from "./routes/Routes.routes";
import theme from "./theme";
// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
// React Query
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// React Redux
import { Provider } from "react-redux";
import { store } from "./app/store";

import InitializeCurrencies from "./features/currencies/InitializeCurrencies.component";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <InitializeCurrencies />
          <MyRoutes />
        </ChakraProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
