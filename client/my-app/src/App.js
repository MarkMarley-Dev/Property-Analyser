import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Price from "./Components/Search/PriceSearch/Price/PriceSearch";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/price" component={Price}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
