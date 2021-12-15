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
import Yield from "./Components/Search/Rents/Yield/Yield";
import DemandRental from "./Components/Search/Rents/DemandRental/DemandRental";
import AreaStats from "./Components/Search/AreaStats/AreaStats";
import AgentSearch from "./Components/Search/AreaStats/AgentSearch/AgentSearch";
import CrimeSearch from "./Components/Search/AreaStats/Crime/Crime";
import DemographicsSearch from "./Components/Search/AreaStats/Demographics/DemographicsSearch";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Reset from "./Components/Reset/Reset";
import Account from "./components/Account/Account";
import "./App.css";

function App() {
  return (
    <>
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
          <Route path="/yield" component={Yield}></Route>
          <Route path="/demandrental" component={DemandRental}></Route>

          <Route path="/areaStats" component={AreaStats}></Route>
          <Route path="/agentSearch" component={AgentSearch}></Route>
          <Route path="/crime" component={CrimeSearch}></Route>
          <Route path="/demographics" component={DemographicsSearch}></Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/account" component={Account} />
        </Switch>
      </BrowserRouter>
      <CookieConsent
        location="bottom"
        buttonText="No problem!"
        style={{
          background: "#f6416c",
          paddingBottom: "0.5rem",
          maxWidth: "100%",
        }}
        buttonStyle={{
          color: "#ffde7d",
          color: "#000",
          fontSize: "13px",
          borderRadius: "5px",
          fontFamily: "Roboto Mono,monospace",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>We use pizzas to!</span>
      </CookieConsent>
    </>
  );
}

export default App;
