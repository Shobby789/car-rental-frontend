import React from "react";
import { styles } from "../styles/styles";
import CarReviews from "../components/CarDetails/CarReviews";
import CarDetailsSection from "../components/CarDetails/CarDetailsSection";

const CarDetails = () => {
  return (
    <div
      className={`w-full py-6 md:py-8 flex flex-col justify-start items-start ${styles.paddingHorizontal}`}
    >
      <CarDetailsSection />
      <CarReviews />
    </div>
  );
};

export default CarDetails;
