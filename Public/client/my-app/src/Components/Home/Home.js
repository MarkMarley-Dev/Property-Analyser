import "./home.scss";
import PageHeader from "../PageHeader/PageHeader";
import Hero from "../Heros/HomeHero/HomeHero";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <main>
      <PageHeader />
      <Hero />
      <section className="services__ctn">
        <div className="services__info">
          <div className="services__offer-ctn">
            <h2 className="services__subtitle"> What we offer</h2>
            <p className="services__offer">
              At Property Analyser we offer a premium service to offer property
              investors. The data we offer is at the most granular level to help
              make the most educated decision. You will be able to search from
              average price, HMO rents to rental demand and anywhere in between.
              Please check out our search area to get started and see what oter
              searches we have available.
            </p>
          </div>
          <div className="services__helps-ctn">
            <h2 className="services__subtitle"> How This helps</h2>
            <p className="services__helps">
              The most important part when purchasing a property is research,
              research and more research. Property Analyser is here to help in
              every step of the way. With our vast data set belonging to one of
              the largest in the UK we can provide the data points that usually
              only available to instituional investors. This is one tool that
              property investors must have.
            </p>
          </div>
        </div>
        <h2 className="services__subtitle">How it works </h2>
        <div className="services__howto">
          <video
            className="services__video"
            src="../../Assets/images/london-skyline.jpg"
            alt="fake video"
            controls
          ></video>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
