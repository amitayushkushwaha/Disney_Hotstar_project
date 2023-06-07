// Home page after clicking on explore
import React from "react";
import Sidebar from "./Sidebar";
import Recommend from "./Recommend";
import Trending from "./Trending";
import Carousel, { CarouselItem } from "./Carousel";
import Action from "./Action";
import New from "./New";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Carousel />
      <Trending />
      <Recommend />
      <New />
      <Action />
      <Footer />
    </div>
  );
}
export default Home;
