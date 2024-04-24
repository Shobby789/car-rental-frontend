import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroCardImage1, HeroCardImage2 } from "../../assets/export";
import { styles } from "../../styles/styles";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const CarDetailsSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/car-booking-payment`);
  };
  return (
    <div className="w-full py-4 grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col">
        <div className="w-full h-[360px] bg-white rounded-xl flex justify-center items-center">
          <img
            src={HeroCardImage1}
            alt=""
            className="w-4/5 h-auto rounded-lg"
          />
        </div>
        <div className="w-full flex items-center justify-between rounded-xl py-6 gap-4">
          <img
            src={HeroCardImage1}
            alt=""
            className="w-[30%] bg-white py-6 rounded-xl cursor-pointer"
          />
          <img
            src={HeroCardImage2}
            alt=""
            className="w-[30%] bg-white py-6 rounded-xl cursor-pointer"
          />
          <img
            src={HeroCardImage1}
            alt=""
            className="w-[30%] bg-white py-6 rounded-xl cursor-pointer"
          />
        </div>
      </div>
      <div className="col-span-12 bg-white rounded-xl md:col-span-6 lg:col-span-6 flex flex-col justify-between p-4 md:p-6 h-[485px]">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-3xl font-bold">Nissan GT - R</h3>
          <div className="flex items-center gap-x-1">
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm ms-1">440+ Reviews</span>
          </div>
        </div>
        <p className={`text-base ${styles.secondaryText} leading-8`}>
          NISMO has become the embodiment of Nissan's outstanding performance,
          inspired by the most unforgiving proving ground, the "race track".
        </p>
        <div className="grid grid-rows-2 grid-cols-12 gap-4">
          <div className="col-span-6 row-span-1 flex items-center justify-between pr-0 md:pr-4">
            <span className={`text-base font-medium ${styles.secondaryText}`}>
              Car Type
            </span>
            <span className="text-base font-semibold text-[#596780]">
              Sports
            </span>
          </div>
          <div className="col-span-6 row-span-1 flex items-center justify-between">
            <span className={`text-base font-medium ${styles.secondaryText}`}>
              Capacity
            </span>
            <span className="text-base font-semibold text-[#596780]">
              2 Person
            </span>
          </div>
          <div className="col-span-6 row-span-1 flex items-center justify-between pr-0 md:pr-4">
            <span className={`text-base font-medium ${styles.secondaryText}`}>
              Steering
            </span>
            <span className="text-base font-semibold text-[#596780]">
              Manual
            </span>
          </div>
          <div className="col-span-6 row-span-1 flex items-center justify-between">
            <span className={`text-base font-medium ${styles.secondaryText}`}>
              Gasoline
            </span>
            <span className="text-base font-semibold text-[#596780]">70L</span>
          </div>
        </div>
        {/* rent button */}
        <div className="w-full flex justify-between items-center">
          <p className="text-2xl font-bold">
            $90/
            <sub className={`font-medium text-base ${styles.secondaryText}`}>
              day
            </sub>
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={handleNavigate}
            className={`text-base font-bold bg-[#3563E9] text-white px-5 py-3 rounded-lg`}
          >
            Rent Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsSection;
