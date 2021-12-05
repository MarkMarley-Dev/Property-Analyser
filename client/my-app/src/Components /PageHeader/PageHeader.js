import "./pageHeader.scss";

const PageHeader = () => {
  return (
    <header className="pageHeader">
      <div className="pageHeader__logo-ctn">
        <p className="pageHeader__logo"> Property Analyser</p>
      </div>
      <div className="pageHeader__nav-ctn">
        <div className="pageHeader__nav-services">Home</div>

        <div className="pageHeader__nav-search">Search</div>
        <div className="pageHeader__nav-compare">Compare</div>
        <div className="pageHeader__nav-login">Log In</div>
      </div>
    </header>
  );
};

export default PageHeader;
