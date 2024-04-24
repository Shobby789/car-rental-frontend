import React from "react";
import { styles } from "../styles/styles";

const Footer = () => {
  return (
    <div
      className={`w-full bg-white py-6 md:py-14 border-t ${styles.paddingHorizontal} grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-6`}
    >
      <div className="col-span-12 md:col-span-6 lg:grid-cols-4 flex flex-col gap-y-5">
        <h2 className={`${styles.primaryText} text-3xl font-bold`}>MORENT</h2>
        <p className={`${styles.secondaryText} text-base`}>
          Our vision is to provide convenience <br /> and help increase your
          sales business.
        </p>
      </div>
      <div className="col-span-6 md:col-span-12 lg:col-span-2 lg:grid-cols-4 flex flex-col items-start gap-y-5">
        <p className="font-semibold text-xl">About</p>
        <div className="flex flex-col gap-y-4">
          <p className={`${styles.secondaryText} text-sm`}>How it works</p>
          <p className={`${styles.secondaryText} text-sm`}>Featured</p>
          <p className={`${styles.secondaryText} text-sm`}>Partnership</p>
          <p className={`${styles.secondaryText} text-sm`}>Business Relation</p>
        </div>
      </div>
      <div className="col-span-6 md:col-span-12 lg:col-span-2 lg:grid-cols-4 flex flex-col items-start gap-y-5">
        <p className="font-semibold text-xl">Community</p>
        <div className="flex flex-col gap-y-4">
          <p className={`${styles.secondaryText} text-sm`}>Events</p>
          <p className={`${styles.secondaryText} text-sm`}>Blogs</p>
          <p className={`${styles.secondaryText} text-sm`}>Podcast</p>
          <p className={`${styles.secondaryText} text-sm`}>Invite a friend</p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-12 lg:col-span-2 lg:grid-cols-4 flex flex-col items-start gap-y-5">
        <p className="font-semibold text-xl">Socials</p>
        <div className="flex flex-col gap-y-4">
          <p className={`${styles.secondaryText} text-sm`}>Discord</p>
          <p className={`${styles.secondaryText} text-sm`}>Instagram</p>
          <p className={`${styles.secondaryText} text-sm`}>Twitter</p>
          <p className={`${styles.secondaryText} text-sm`}>Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
