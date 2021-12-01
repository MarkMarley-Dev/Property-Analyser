import "./servicescomponent.scss";
const Services = () => {
  return (
    <section className="services__ctn">
      <div className="services__info">
        <div className="services__offer-ctn">
          <h2 className="services__subtitle"> What we offer</h2>
          <p className="services__offer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris.
          </p>
        </div>
        <div className="services__helps-ctn">
          <h2 className="services__subtitle"> How This helps</h2>
          <p className="services__helps">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris.
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
  );
};

export default Services;
