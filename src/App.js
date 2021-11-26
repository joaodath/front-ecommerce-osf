import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import { RoutesComponents } from "./routes/RoutesComponents";
import { theme } from "./style/theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/" component={Home} />
              <RoutesComponents />
            </Switch>
          </ThemeProvider>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
