import './App.scss';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer"
import { RoutesComponents } from './routes/RoutesComponents'
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/produtos" component={Products}/>
        <RoutesComponents />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
