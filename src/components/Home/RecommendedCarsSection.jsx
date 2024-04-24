import React from "react";
import { styles } from "../../styles/styles";
import CarCard from "./CarCard";
import { recommendedcars } from "../../constants/recommendedcars";

const RecommendedCarsSection = () => {
  return (
    <div className={`flex flex-col gap-y-6 md:gap-y-10 py-6 md:py-8`}>
      <div
        className={`flex justify-between items-center ${styles.paddingHorizontal}`}
      >
        <h2 className={`${styles.secondaryText} text-xl font-semibold`}>
          Recommended Cars
        </h2>
        <button className={`${styles.primaryText} font-semibold text-base`}>
          View All
        </button>
      </div>
      <div
        className={`${styles.paddingHorizontal} grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6`}
      >
        {recommendedcars.map((car, index) => {
          return <CarCard key={index} car={car} />;
        })}
      </div>
      <div className="text-center py-6">
        <button
          className={`text-base font-semibold text-white rounded-lg bg-[#3563E9] hover:bg-[#5075e4] transition-all duration-300 px-4 py-3`}
        >
          Show More Cars
        </button>
      </div>
    </div>
  );
};

export default RecommendedCarsSection;
