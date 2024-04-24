import React from "react";
import { styles } from "../../styles/styles";

const CheckBox = ({ label, count }) => {
  return (
    <div className="flex items-center gap-x-3">
      <input
        type="checkbox"
        name={label}
        id={label}
        className="w-4 h-4 accent-[#3563E9] rounded-xl"
      />
      <label htmlFor={label} className="text-base font-medium">
        {label}{" "}
        <span
          className={`${styles.secondaryText} text-sm`}
        >{`(${count})`}</span>
      </label>
    </div>
  );
};

export default CheckBox;
