import "./heroSection.css";
import React from "react";

const HeroSection = () => {
  return (
    <div className="homepageHero">
      <div className="heroPhoto">
        <img src="hero.png" alt="hero" />
      </div>
      <div className="heroQuote">
        <p>
          Izbit Technological Organization is a flagship Tech & research company
          founded in 2019. Our office in Nairobi’s Upper Hill overlooks the
          Waterway and is just a few miles from Tour's Bridge.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
