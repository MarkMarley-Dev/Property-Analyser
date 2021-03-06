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
        <h2 className="rents__title-sub-title">
          Please choose your desired search{" "}
        </h2>
        <div className="rents__options">
          <Link to="/rentsavg">
            <article className="rents__avg">
              <h3 className="rents__avg-subtitle"> Rents - Price Avg </h3>
              <p className="rents__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking prices.
              </p>
            </article>
          </Link>
          <Link to={"/rentshmo"}>
            <article className="rents__per-sqft">
              <h3 className="rents__per-sqft-subtitle">Rents - HMO</h3>
              <p className="rents__avg-text">
                Option returns statistical average and confidence intervals of
                live property asking specific to HMO by room basis.
              </p>
            </article>
          </Link>
          <Link to="/yield">
            <article className="rents__avg">
              <h3 className="rents__avg-subtitle"> Yield </h3>
              <p className="rents__avg-text">
                Option returns statistical average Yield within a given area.
              </p>
            </article>
          </Link>
          <Link to="/demandrental">
            <article className="rents__per-sqft">
              <h3 className="rents__avg-subtitle"> Rental Demand </h3>
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
