import PageHeader from "../../PageHeader/PageHeader";
import RentsHero from "../../Heros/RentsHero/RentsHero";
import Footer from "../../Footer/Footer";
import "./rentsYields.scss";
import { Link } from "react-router-dom";

const RentsYields = () => {
  return (
    <>
      <PageHeader />
      <RentsHero />
      <section className="rents">
        <h2 className="rents__title"> Please choose your desired search </h2>
        <div className="rents__options">
          <Link to="/avg">
            <article className="rents__avg">
              <h3 className="rents__avg-subtitle"> Rents - Price Avg </h3>
              <p className="rents__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking prices.
              </p>
            </article>
          </Link>
          <Link to={"/pricepersqft"}>
            <article className="rents__per-sqft">
              <h3 className="rents__per-sqft-subtitle">
                {" "}
                For Sale - Prices per Sq-Ft
              </h3>
              <p className="rents__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking prices per square foot.
              </p>
            </article>
          </Link>
          <Link to="/soldAvg">
            <article className="rents__avg">
              <h3 className="rents__avg-subtitle"> Sold - Price Avg </h3>
              <p className="rents__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking prices.
              </p>
            </article>
          </Link>
          <Link to="/soldpricepersqft">
            <article className="rents__per-sqft">
              <h3 className="rents__avg-subtitle"> Sold - Price Per SqFt </h3>
              <p className="rents__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking prices.
              </p>
            </article>
          </Link>
          <Link to="/demandsale">
            <article className="rents__per-sqft">
              <h3 className="rents__avg-subtitle"> Demand - For Sale </h3>
              <p className="rents__avg-text">
                Option returns statistical average and demand rating along with
                supporting data.
              </p>
            </article>
          </Link>

          <Link to="/growth">
            <article className="rents__per-sqft">
              <h3 className="rents__avg-subtitle"> Property Value Growth </h3>
              <p className="rents__avg-text">
                Option returns statistical average and growth within last 5
                years along with supporting data.
              </p>
            </article>
          </Link>
          <Link to="/stampduty">
            <article className="rents__per-sqft">
              <h3 className="rents__avg-subtitle"> Stamp Duty Calculator </h3>
              <p className="rents__avg-text">
                Option returns the amount of stamp duty needed to be paid on
                varying degrees of ownership
              </p>
            </article>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RentsYields;
