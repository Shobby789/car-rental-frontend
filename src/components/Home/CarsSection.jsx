import React from "react";
import { styles } from "../../styles/styles";
import CarCard from "./CarCard";
import { Link } from "react-router-dom";
import { popularcars } from "../../constants/popularcars";

const CarsSection = () => {
  return (
    <div className={`flex flex-col gap-y-6 md:gap-y-10 py-6 md:py-8`}>
      <div
        className={`flex justify-between items-center ${styles.paddingHorizontal}`}
      >
        <h2 className={`${styles.secondaryText} text-xl font-semibold`}>
          Popular Cars
        </h2>
        <Link
          to="/car-categories"
          className={`${styles.primaryText} font-semibold text-base`}
        >
          View All
        </Link>
      </div>
      <div
        className={`${styles.paddingHorizontal} grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6`}
      >
        {popularcars.map((car, index) => {
          return <CarCard car={car} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CarsSection;
