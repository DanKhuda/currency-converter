import Preloader from "./components/preloader/Preloader";
import useFetch from "./hooks/useFetch";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import Header from "./components/header/Header";
import Convertor from "./components/convertor/Convertor";
import GlobalStyles from "./styles/global";

const App = () => {
  const {
    data: rate,
    isLoading,
    error,
  } = useFetch(`https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR,UAH`);

  return (
    <ThemeProvider theme={baseTheme}>
      <Header rate={rate} title="Currency rate" />
      <Convertor rate={rate} title="Currency convertor" />
      {error && <p>Error: {error}</p>}
      {isLoading && <Preloader />}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
