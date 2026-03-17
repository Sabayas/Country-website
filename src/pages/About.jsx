import React from "react";
import countryData from "../api/countryData.json";

const About = () => {
  return (
    <section className="about-section container">
      <h1 className="container heading-xl center text-align-center">
        Here the Interesting facts <br /> about the Country
      </h1>

      <div className="gradient-cards  ">

        {
          
          countryData.map((country) => (
  <div className="card " key={country.id}>
    <div className="container bg-blue-box">
      <p className="flex card-description">Name: {country.name}</p>
      <p className="flex card-description">Capital: {country.capital}</p>
      <p className="flex card-description">Population: {country.population}</p>
    </div>
  </div>
))

         
          
        }
         </div>
        
    </section>
  );
};

export default About;
