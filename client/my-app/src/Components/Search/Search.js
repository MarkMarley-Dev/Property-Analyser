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
        <div className="search__options">
          <Link to="/price" className="search__price-ctn">
            <article className="search__price">
              <h2 className="search__price-title"> Price </h2>
              <p className="search__price-text"> Includes </p>
              <p className="search__price-text"> For Sale Prices</p>
              <p className="search__price-text"> For Sale Per Sqft</p>
              <p className="search__price-text"> Sold Prices</p>
              <p className="search__price-text"> Sold Per SqFt</p>
              <p className="search__price-text"> & More..</p>
            </article>
          </Link>
          <Link to="/rentsyields" className="search__price-ctn">
            <article className="search__price">
              <h2 className="search__price-title"> Demand & Yield </h2>
              <p className="search__price-text"> Includes </p>
              <p className="search__price-text"> Avg Rents </p>
              <p className="search__price-text"> HMO Rents </p>
              <p className="search__price-text"> Yield </p>
              <p className="search__price-text"> Rental Demand </p>
              <p className="search__price-text"> & More..</p>
            </article>
          </Link>
          <Link to="/areastats" className="search__price-ctn">
            <article className="search__price">
              <h2 className="search__price-title"> Area Statistics </h2>
              <p className="search__price-text"> Includes </p>
              <p className="search__price-text"> Agent Search </p>
              <p className="search__price-text"> Crime </p>
              <p className="search__price-text"> Demongraphics </p>
              <p className="search__price-text"> School </p>
              <p className="search__price-text"> & More.. </p>
            </article>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Search;
