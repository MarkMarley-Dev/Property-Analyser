import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Price from "./Components/Search/PriceSearch/Price/PriceSearch";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AvgPrice from "./Components/Search/PriceSearch/Price/AvgPrice/AvgPrice";
import PricePerSqft from "./Components/Search/PriceSearch/PricePerSq/PricePerSqFtBar";
import SoldAvgPrice from "./Components/Search/PriceSearch/SoldAvgPrice/SoldAvgPrice";
import SoldPerSqFt from "./Components/Search/PriceSearch/SoldPerSqFt/SoldPerSqFt";
import DemandSale from "./Components/Search/PriceSearch/DemandSale/DemandSale";
import GrowthSearch from "./Components/Search/PriceSearch/Growth/Growth";
import StampDuty from "./Components/Search/PriceSearch/StampDuty/StampDuty";
import RentsYields from "./Components/Search/Rents/RentsYields";
import RentsAvg from "./Components/Search/Rents/AvgRents/RentsAvg";
import RentsHmo from "./Components/Search/Rents/RentsHMO/RentsHmo";
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
        <Route path="/soldAvg" component={SoldAvgPrice}></Route>
        <Route path="/soldpricepersqft" component={SoldPerSqFt}></Route>
        <Route path="/demandsale" component={DemandSale}></Route>
        <Route path="/growth" component={GrowthSearch}></Route>
        <Route path="/stampduty" component={StampDuty}></Route>
        <Route path="/rentsyields" component={RentsYields}></Route>
        <Route path="/rentsavg" component={RentsAvg}></Route>
        <Route path="/rentshmo" component={RentsHmo}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
