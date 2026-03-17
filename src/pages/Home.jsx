import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <div className="hero-section main flex">
        <div className="container main-flex  ">
          <div className="hero-content ">
            <h1 className="heading-xl">Explore the <br />World with Us</h1>

            <div className="paragraph">
              <p>Discover the world with us.</p>
            </div>
            <button className=" btn btn-darken bt-inline bg-white-box">
                Start Exploring <FaLongArrowAltRight/>
            </button>
            </div>
            <div className="hero-image flex">
              <img className="img1" src="https://thumbs.dreamstime.com/b/detailed-d-rendering-globe-featuring-world-map-where-each-country-filled-its-respective-national-flag-vibrant-391517235.jpg" alt="" />
            </div>
          
        </div>
      </div>
    </main>
  );
};

export default Home;
