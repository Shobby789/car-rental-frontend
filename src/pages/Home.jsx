import React from "react";
import Hero from "../components/Home/Hero";
import CarsSection from "../components/Home/CarsSection";
import RecommendedCarsSection from "../components/Home/RecommendedCarsSection";
import PickupDropSelection from "../globals/PickupDropSelection";
import CarCategoriesSection from "../components/Home/CarCategoriesSection";
import Hero2 from "../components/Home/Hero2";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <PickupDropSelection /> */}
      <CarCategoriesSection />
      <CarsSection />
      <RecommendedCarsSection />
    </>
  );
};

export default Home;
