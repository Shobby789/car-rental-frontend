import React from "react";
import { styles } from "../../styles/styles";
import { HeroCardImage1 } from "../../assets/export";
import { FaStar } from "react-icons/fa";

const CarrentalSummarySection = () => {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <p className="text-xl font-bold">Rental Summary</p>
        <p className={`text-sm font-medium ${styles.secondaryText}`}>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-5 flex justify-start items-center">
          <img src={HeroCardImage1} className="w-[152px]" alt="" />
        </div>
        <div className="col-span-7 flex flex-col gap-y-1">
          <p className="text-3xl font-bold">Nissan GT - R</p>
          <div className="flex items-center gap-x-1">
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <span
              className={`text-sm ms-1 font-medium ${styles.secondaryText}`}
            >
              440+ Reviews
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full flex justify-between items-center">
        <p className={`${styles.secondaryText} font-medium text-base`}>Subtotal</p>
        <p className="font-semibold text-base">$80.00</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className={`${styles.secondaryText} font-medium text-base`}>Tax</p>
        <p className="font-semibold text-base">$0</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
            <p className="font-bold text-xl">Total Rental Price</p>
            <p className={`${styles.secondaryText} text-xs font-medium`}>Overall price and includes rental discount</p>
        </div>
        <div>
            <p className="font-bold text-3xl">$80.00</p>
        </div>
      </div>
    </div>
  );
};

export default CarrentalSummarySection;
