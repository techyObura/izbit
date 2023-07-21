import HeaderHome from "../../components/headerHome/HeaderHome";
import HeroSection from "../../components/homepage/heroSection/HeroSection";
import SubH from "../../components/subH/SubH";

import "./home.css";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <SubH />
      <div className="homeSections">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
