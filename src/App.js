import "./App.scss";
import { Switch } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import { RoutesComponents } from "./routes/RoutesComponents";
import { theme } from "./style/theme";
import { ThemeProvider } from "@material-ui/core";


function App() {
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <RoutesComponents />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
