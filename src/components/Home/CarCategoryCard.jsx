import React from "react";
import { AudiLogo } from "../../assets/export";
import { Link } from "react-router-dom";
import { TbCarSuv } from "react-icons/tb";

const CarCategoryCard = ({ image, title }) => {
  return (
    <Link
      to="/"
      className="flex flex-col items-center justify-center py-6 px-8 rounded-lg gap-2 bg-white card-shadow"
    >
      {/* <img src={image} alt="car-logo" className="w-28" /> */}
      <TbCarSuv className="w-28 h-10" />
      <h2 className="font-semibold text-xl">{title}</h2>
    </Link>
  );
};

export default CarCategoryCard;
