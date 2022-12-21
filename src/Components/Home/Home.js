import React from "react";
import useTitle from "../hook/useTitle";
import Articales from "./Articales";
import Article2 from "./Article2";
import Banner from "./Banner/Banner";
import PartOfService from "./PartOfService";
// import Slider from "./Slider";

const Home = () => {
  useTitle("home");
  return (
    <div>
      <Banner></Banner>
      <PartOfService></PartOfService>
      <Articales></Articales>
      <Article2></Article2>
    </div>
  );
};

export default Home;
