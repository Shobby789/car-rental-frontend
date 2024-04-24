import React from "react";
import HeroCard from "./HeroCard";
import { styles } from "../../styles/styles";
import { heroCards } from "../../constants/hero";
import { useSelector, useDispatch } from "react-redux";

const Hero = () => {
  const palette = useSelector((state) => state.global.palette);
  console.log("hero palette >> ", palette);

  return (
    <div
      className={`${styles.paddingHorizontal} py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-6`}
    >
      {heroCards.map((card, index) => {
        return <HeroCard card={card} key={index} />;
      })}
    </div>
  );
};

export default Hero;
