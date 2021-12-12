import PageHeader from "../../../PageHeader/PageHeader";
import PriceHero from "../../../Heros/PriceHero/PriceHero";
import Footer from "../../../Footer/Footer";
import "./priceSearch.scss";
import { Link } from "react-router-dom";

const PriceSearch = () => {
  return (
    <>
      <PageHeader />
      <PriceHero />
      <section className="search">
        <h2 className="search__title"> Please choose your desired search </h2>
        <div className="search__options">
          <Link to="/avg">
            <article className="search__avg">
              <h3 className="search__avg-subtitle"> For Sale - Price Avg </h3>
              <p className="search__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking prices.
              </p>
            </article>
          </Link>
          <Link to={"/pricepersqft"}>
            <article className="search__per-sqft">
              <h3 className="search__per-sqft-subtitle">
                {" "}
                For Sale - Prices per Sq-Ft
              </h3>
              <p className="search__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking prices per square foot.
              </p>
            </article>
          </Link>
          <Link to="/soldAvg">
            <article className="search__avg">
              <h3 className="search__avg-subtitle"> Sold - Price Avg </h3>
              <p className="search__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking prices.
              </p>
            </article>
          </Link>
          <Link to="/soldpricepersqft">
            <article className="search__per-sqft">
              <h3 className="search__avg-subtitle"> Sold - Price Per SqFt </h3>
              <p className="search__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking prices.
              </p>
            </article>
          </Link>
          <Link to="/demandsale">
            <article className="search__per-sqft">
              <h3 className="search__avg-subtitle"> Demand - For Sale </h3>
              <p className="search__avg-text">
                Option returns statistical average and demand rating along with
                supporting data.
              </p>
            </article>
          </Link>

          <Link to="/growth">
            <article className="search__per-sqft">
              <h3 className="search__avg-subtitle"> Property Value Growth </h3>
              <p className="search__avg-text">
                Option returns statistical average and growth within last 5
                years along with supporting data.
              </p>
            </article>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PriceSearch;
