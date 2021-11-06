import './App.scss';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer"
import Products from './pages/Products/Products'

function App() {
  return (
    <div className="App">
      <Products/>
      {/* <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/aa" component={Home}/>
          <Route exact path="/" component={Products}/>
        </Switch>
      </BrowserRouter>
      <Footer/> */}
    </div>
  );
}

export default App;
