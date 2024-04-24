import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { CiHeart } from "react-icons/ci";
import { Car1 } from "../../assets/export";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSyncCircleOutline } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SavedCarCard = () => {
  const [save, setSave] = useState(false);
  const navigate = useNavigate();
  const handleSave = () => {
    setSave(!save);
  };

  const handleNavigate = () => {
    navigate(`/car-details/${3}`);
  };
  return (
    <div className="w-full h-[388px] bg-white card-shadow rounded-lg flex flex-col items-start justify-between py-6 px-8 md:p-6 mx-auto">
      <div className="w-full flex flex-col gap-y-1">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start justify-start pt-0">
            <p className="text-xl font-semibold">Nissan GT-R</p>
            <p className={`${styles.secondaryText} text-sm font-medium`}>
              Sport
            </p>
          </div>
          <button
            className="flex items-center justify-center mt-1"
            onClick={handleSave}
          >
            {save ? (
              <FaHeart
                className={`${styles.secondaryText} text-2xl text-[#ED3F3F]`}
              />
            ) : (
              <CiHeart className={`${styles.secondaryText} text-2xl`} />
            )}
          </button>
        </div>
      </div>
      <img src={Car1} alt="" className="w-full" />
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <BsFillFuelPumpFill className={`text-base ${styles.secondaryText}`} />
          <span className={`${styles.secondaryText} text-base`}>90L</span>
        </div>
        <div className="flex items-center gap-x-1">
          <IoSyncCircleOutline
            className={`text-base ${styles.secondaryText}`}
          />
          <span className={`${styles.secondaryText} text-base`}>Manual</span>
        </div>
        <div className="flex items-center gap-x-1">
          <BsPersonFill className={`text-base ${styles.secondaryText}`} />
          <span className={`${styles.secondaryText} text-base`}>2 People</span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-xl font-bold">
          $99.00/{" "}
          <sub className={`${styles.secondaryText} font-medium`}>day</sub>
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={handleNavigate}
          className={`text-sm font-semibold bg-[#3563E9] py-2 px-3 rounded-lg text-white`}
        >
          Rent Now
        </motion.button>
      </div>
    </div>
  );
};

export default SavedCarCard;
