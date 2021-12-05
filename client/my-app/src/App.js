import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/search" component={Search}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
