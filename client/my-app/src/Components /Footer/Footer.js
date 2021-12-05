import "./footer.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__info-ctn">
        <div className="footer__top-ctn">
          <div className="footer__contact">
            <h3 className="footer__subtitle">Contact Details</h3>
            <p className="footer__text"> Email: markmarleydev@gmail.com </p>
            <p className="footer__text"> Phone: 07447821328</p>
          </div>
          <div className="footer__address">
            <h3 className="footer__subtitle">Address</h3>
            <p className="footer__text"> Endlesham Road, Sw12-8JX </p>
            <p className="footer__text"> Balham London</p>
          </div>
        </div>

        <div className="footer__socials">
          <h3 className="footer__subtitle">Socials</h3>
          <div className="footer__bottom-ctn">
            <div className="footer__git-logo-ctn">
              <div className="footer__git-logo"></div>
              <p className="footer__text"> https://github.com/MarkMarley-Dev</p>
            </div>
            <div className="footer__linkedin-ctn">
              <div className="footer__linkedin-logo"></div>
              <p className="footer__text">
                https://www.linkedin.com/in/mark-marley/
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <p className="footer__to-top">"Please Sir Take me back to the top!"</p> */}
      <p className="footer__copyright">
        © All right reserved, Property Right Belong to Mark Marley{" "}
      </p>
    </footer>
  );
};

export default Footer;
