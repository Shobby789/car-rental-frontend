import React from "react";
import { styles } from "../../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/themeSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroCard = ({ card }) => {
  const theme = useSelector((state) => state.global.theme);
  const palette = useSelector((state) => state.global.palette);
  // console.log("theme from herocard >>> ", theme);
  // console.log("palette from herocard >>> ", palette);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate("/car-categories")
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };
  return (
    <div
      className={`w-full h-autp py-8 md:h-[390px] ${styles.primaryBg} rounded-lg ${card?.cardBg} flex flex-col justify-center items-start gap-y-3 px-8 lg:px-10`}
    >
      <h1 className={`text-3xl font-semibold text-white w-full md:w-3/5`}>
        {card?.heading}
      </h1>

      <p className={`text-white w-full md:w-3/5`}>{card?.subheading}</p>
      <motion.button
      onClick={handleNavigate}
        className={`px-4 py-2 ${card?.buttonBg} text-white rounded-lg`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Rent a Car
      </motion.button>
      <div className="w-full flex justify-center">
        <img src={card?.image} alt="" className="justify-self-center" />
      </div>
    </div>
  );
};

export default HeroCard;
