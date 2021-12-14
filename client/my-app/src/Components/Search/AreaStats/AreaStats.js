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
          <Link to={"/crime"}>
            <article className="rents__per-sqft">
              <h3 className="rents__per-sqft-subtitle">Crime</h3>
              <p className="rents__avg-text">
                Option returns analytics on local crime rates, along with some
                obseravations compared to national data.
              </p>
            </article>
          </Link>
          <Link to="/demographics">
            <article className="rents__avg">
              <h3 className="rents__avg-subtitle"> Demographics</h3>
              <p className="rents__avg-text">
                Option returns returns population demographic data from the
                smallest radius at which there is reasonable data.
              </p>
            </article>
          </Link>
          <Link to="/schools">
            <article className="rents__per-sqft">
              <h3 className="rents__avg-subtitle"> Schools </h3>
              <p className="rents__avg-text">
                Option returns returns data about nearby state and independent
                schools.
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
