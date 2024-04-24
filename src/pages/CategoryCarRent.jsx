import React from "react";
import CarCard from "../components/Home/CarCard";
import FilterList from "../components/CategoryCarRent/FilterList";
import PickupDropSelection from "../globals/PickupDropSelection";
import { recommendedcars } from "../constants/recommendedcars";

const CategoryCarRent = () => {
  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-12`}>
        <div className={`col-span-0 md:col-span-2 bg-white`}>
          <FilterList />
        </div>
        <div className={`py-6 col-span-12 md:col-span-10`}>
          {/* <div className="px-0">
            <PickupDropSelection />
          </div> */}
          <div className="px-4 md:px-6 lg:px-10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:py-4">
            {recommendedcars.map((car, index) => {
              return <CarCard key={index} car={car} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCarRent;
