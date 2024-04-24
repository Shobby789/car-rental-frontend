import React from "react";
import { styles } from "../styles/styles";
import SavedItemsSection from "../components/Saved/SavedItemsSection";

const Saved = () => {
  return (
    <div
      className={`w-full flex flex-col justify-start items-start ${styles.paddingHorizontal} ${styles.paddingVertical}`}
    >
      <h2 className="text-2xl font-semibold">Saved Items</h2>
      <SavedItemsSection/>
    </div>
  );
};

export default Saved;
