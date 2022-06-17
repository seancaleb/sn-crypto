import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme";
import Webfont from "webfontloader";

Webfont.load({
  custom: {
    families: ["HelveticaNeue"],
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>
);
