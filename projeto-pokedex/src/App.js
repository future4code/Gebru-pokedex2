import { GlobalStyle } from "../src/styles/AppStyle";
import Routers from "./routers/Routes";
import GlobalState from "./global/GlobalState";
import { ThemeProvider } from '@mui/material';
import theme from "./constants/theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <GlobalStyle />
        <Routers />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;