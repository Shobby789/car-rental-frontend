import React from "react";
import CarCategoryCard from "./CarCategoryCard";
import { styles } from "../../styles/styles";
import { carcategories } from "../../constants/carcategories";
import { TbCarSuv } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoCarSportSharp } from "react-icons/io5";

const CarCategoriesSection = () => {
  return (
    <div
      className={`w-full py-6 md:py-8 ${styles.paddingHorizontal} flex flex-col gap-y-6 md:gap-y-10`}
    >
      <h1 className={`${styles.secondaryText} text-xl font-semibold`}>
        Explore Our Premium Brands
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
        {/* {carcategories.map((category, index) => {
          return (
            <CarCategoryCard
              key={index}
              title={category.title}
              image={category.image}
            />
          );
        })} */}
        <div>
          <Link
            to="/"
            className="flex flex-col items-center justify-center py-6 px-8 rounded-lg gap-2 bg-white card-shadow"
          >
            <TbCarSuv className="w-28 h-10" />
            <h2 className="font-semibold text-lg uppercase">SUV</h2>
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="flex flex-col items-center justify-center py-6 px-8 rounded-lg gap-2 bg-white card-shadow"
          >
            <TbCarSuv className="w-28 h-10" />
            <h2 className="font-semibold text-lg uppercase">MPV</h2>
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="flex flex-col items-center justify-center py-6 px-8 rounded-lg gap-2 bg-white card-shadow"
          >
            <TbCarSuv className="w-28 h-10" />
            <h2 className="font-semibold text-lg uppercase">Sedan</h2>
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="flex flex-col items-center justify-center py-6 px-8 rounded-lg gap-2 bg-white card-shadow"
          >
            <TbCarSuv className="w-28 h-10" />
            <h2 className="font-semibold text-lg uppercase">Coupe</h2>
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="flex flex-col items-center justify-center py-6 px-8 rounded-lg gap-2 bg-white card-shadow"
          >
            <IoCarSportSharp className="w-28 h-10" />
            <h2 className="font-semibold text-lg uppercase">Sports</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCategoriesSection;
