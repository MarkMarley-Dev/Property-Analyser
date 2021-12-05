import "./pageHeader.scss";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const PageHeader = () => {
  return (
    <header className="pageHeader">
      <Link to={"/"}>
        <div className="pageHeader__logo-ctn">
          <p className="pageHeader__logo"> Property Analyser</p>
        </div>
      </Link>
      <div className="pageHeader__nav-ctn">
        <Link to="/">
          <div className="pageHeader__nav-services">Home</div>
        </Link>
        <Link to="/search">
          <div className="pageHeader__nav-search">Search</div>
        </Link>
        <div className="pageHeader__nav-compare">Compare</div>
        <div className="pageHeader__nav-login">Log In</div>
      </div>
    </header>
  );
};

export default PageHeader;
