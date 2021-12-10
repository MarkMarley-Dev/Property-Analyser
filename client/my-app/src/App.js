import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Price from "./Components/Search/PriceSearch/Price/PriceSearch";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AvgPrice from "./Components/Search/PriceSearch/Price/AvgPrice/AvgPrice";
import PricePerSqft from "./Components/Search/PriceSearch/PricePerSq/PricePerSqFtBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/price" component={Price}></Route>
        <Route path="/avg" component={AvgPrice}></Route>
        <Route path="/pricepersqft" component={PricePerSqft}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
