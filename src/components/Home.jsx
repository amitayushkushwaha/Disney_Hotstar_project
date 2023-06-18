// Home page after clicking on explore
import React from "react";
import Sidebar from "./Sidebar";
import Recommend from "./Recommend";
import Trending from "./Trending";
import Carousel, { CarouselItem } from "./Carousel";
import Action from "./Action";
import New from "./New";
import Footer from "./Footer";
import Fav_section from "./Fav_section";

function Home() {

  return (
    <div className="home">
      <Sidebar />
      <Carousel />
      <Fav_section />
      <Trending />
      <Recommend />
      <New />
      <Action />
      <Footer />
    </div>
  );
}
export default Home;
