import React from "react";
import { styles } from "../../styles/styles";
import CheckBox from "./CheckBox";

const FilterList = () => {
  return (
    <div
      className={`w-full py-12 px-6 ps-8 hidden md:flex flex-col gap-y-12 bg-white`}
    >
      <div className="flex flex-col gap-y-4">
        <p className={`text-sm font-semibold ${styles.secondaryText}`}>Type</p>
        <CheckBox label="Sports" count={10} />
        <CheckBox label="SUV" count={5} />
        <CheckBox label="MPV" count={8} />
        <CheckBox label="Sedan" count={6} />
        <CheckBox label="Coupe" count={4} />
        <CheckBox label="Hatchback" count={1} />
      </div>

      <div className="flex flex-col gap-y-4">
        <p className={`text-sm font-semibold ${styles.secondaryText}`}>
          Capacity
        </p>
        <CheckBox label="2 Person" count={3} />
        <CheckBox label="4 Person" count={15} />
        <CheckBox label="6 Person" count={7} />
        <CheckBox label="8 or more" count={12} />
      </div>

      <div className="flex flex-col gap-y-4">
        <p className={`text-sm font-semibold ${styles.secondaryText}`}>Price</p>
        <div>
          <div className="w-full">
            <input
              type="range"
              name="price"
              id="price"
              className="w-full accent-[#3563E9]"
            />
          </div>
          <label htmlFor="cartype" className="text-base font-medium">
            Max. $100.00
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
