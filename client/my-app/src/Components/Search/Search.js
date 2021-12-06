import "./search.scss";
import PageHeader from "../PageHeader/PageHeader";
import SearchHero from "../Heros/SearchHero/SearchHero";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <PageHeader />
      <SearchHero />

      <section className="search__ctn">
        <header className="search__header">
          <Link to="/price" className="search__price-ctn">
            <p className="search__price"> Price </p>
          </Link>
          <Link to="/search/hmo" className="search__hmo-ctn">
            <p className="search__hmo"> HMO </p>
          </Link>
          <Link to="/search/demand&yield" className="search__demand-yield-ctn">
            <p className="search__demand-yield"> Demand & Yield </p>
          </Link>
        </header>
      </section>
      <Footer />
    </>
  );
};

export default Search;
