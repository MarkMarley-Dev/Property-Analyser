import PageHeader from "../../PageHeader/PageHeader";
import RentsHero from "../../Heros/RentsHero/RentsHero";
import Footer from "../../Footer/Footer";
import "./areaStats.scss";
import { Link } from "react-router-dom";

const AreaStats = () => {
  return (
    <>
      <PageHeader />
      <RentsHero />
      <section className="rents">
        <h2 className="rents__title-sub-title">
          Please choose your desired search{" "}
        </h2>
        <div className="rents__options">
          <Link to="/agentSearch">
            <article className="rents__avg">
              <h3 className="rents__avg-subtitle"> Agent Search </h3>
              <p className="rents__avg-text">
                Option returns analytics on agents market share.
              </p>
            </article>
          </Link>
          <Link to={"/rentshmo"}>
            <article className="rents__per-sqft">
              <h3 className="rents__per-sqft-subtitle">Crime</h3>
              <p className="rents__avg-text">
                Option returns analytics on local crime rates, along with some
                obseravations compared to national data.
              </p>
            </article>
          </Link>
          <Link to="/yield">
            <article className="rents__avg">
              <h3 className="rents__avg-subtitle"> Demographics</h3>
              <p className="rents__avg-text">
                Option returns returns population demographic data from the
                smallest radius at which there is reasonable data.
              </p>
            </article>
          </Link>
          <Link to="/demandrental">
            <article className="rents__per-sqft">
              <h3 className="rents__avg-subtitle"> Schools </h3>
              <p className="rents__avg-text">
                Option returns returns data about nearby state and independent
                schools.
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

export default AreaStats;
