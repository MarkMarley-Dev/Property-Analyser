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

      <section className="search__home-ctn">
        <div className="search__home-options">
          <Link to="/price" className="search__home-price-ctn">
            <article className="search__home-price">
              <h2 className="search__home-price-title"> Price </h2>
              <p className="search__home-price-text"> Includes </p>
              <p className="search__home-price-text"> For Sale Prices</p>
              <p className="search__home-price-text"> For Sale Per Sqft</p>
              <p className="search__home-price-text"> Sold Prices</p>
              <p className="search__home-price-text"> Sold Per SqFt</p>
              <p className="search__home-price-text"> & More..</p>
            </article>
          </Link>
          <Link to="/rentsyields" className="search__home-price-ctn">
            <article className="search__home-price">
              <h2 className="search__home-price-title"> Demand & Yield </h2>
              <p className="search__home-price-text"> Includes </p>
              <p className="search__home-price-text"> Avg Rents </p>
              <p className="search__home-price-text"> HMO Rents </p>
              <p className="search__home-price-text"> Yield </p>
              <p className="search__home-price-text"> Rental Demand </p>
              <p className="search__home-price-text"> & More..</p>
            </article>
          </Link>
          <Link to="/areastats" className="search__home-price-ctn">
            <article className="search__home-price">
              <h2 className="search__home-price-title"> Area Statistics </h2>
              <p className="search__home-price-text"> Includes </p>
              <p className="search__home-price-text"> Agent Search </p>
              <p className="search__home-price-text"> Crime </p>
              <p className="search__home-price-text"> Demongraphics </p>
              <p className="search__home-price-text"> School </p>
              <p className="search__home-price-text"> & More.. </p>
            </article>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Search;
