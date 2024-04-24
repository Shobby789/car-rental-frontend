import React from "react";
import { styles } from "../../styles/styles";
import { Hero2Image, Porsche } from "../../assets/export";

const Hero2 = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} flex flex-col gap-y-6 items-center text-center pt-12 relative`}
    >
      {/* <div className="w-[200px] h-[200px] absolute top-5 left-10 rounded-full box_shadow"></div> */}
      <h1 className="font-semibold text-3xl md:text-5xl lg:leading-[64px] lg:w-[90%] z-20">
        Explore the world's largest car sharing & rental marketplace
      </h1>
      <img
        src={
          "https://www.pngitem.com/pimgs/m/90-902432_porsche-the-new-911-carrera-s-hd-png.png"
        }
        alt=""
        className="mt-0 pt-0 z-20"
      />
      {/* <div className="w-[200px] h-[200px] absolute bottom-24 right-10 rounded-full box_shadow z-10"></div> */}
    </div>
  );
};

export default Hero2;
