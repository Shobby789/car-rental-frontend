import React, { useEffect, useState } from "react";
import { styles } from "../styles/styles";
import { HiArrowsUpDown } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

const PickupDropSelection = () => {
  const location = useLocation();
  const [padding, setPadding] = useState(0);
  // console.log("current path >> ", location.pathname);
  useEffect(() => {
    if (location.pathname === "/") {
      setPadding("px-4 md:px-8 lg:px-14");
    } else if (location.pathname == "/car-categories") {
      setPadding("px-4 md:px-8 lg:px-10");
    } else {
      setPadding(padding);
    }

    return () => {
      console.log("object");
    };
  });
  return (
    <div className={`w-full py-6 md:py-8 ${padding}`}>
      <div
        className={`grid grid-cols-1 md:grid-cols-7 lg:grid-cols-7 gap-y-2 md:gap-y-0`}
      >
        <div
          className={`card-shadow col-span-3 py-6 md:py-8 px-8 lg:px-10 rounded-lg bg-white`}
        >
          <div className="w-full flex flex-col gap-y-4">
            <div className="flex items-center gap-x-3">
              <input
                type="radio"
                name="pickup"
                id="pickup"
                className="w-5 h-5"
              />
              <label htmlFor="pickup" className="text-base font-semibold">
                Pick - Up
              </label>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col items-start">
                <p className="font-bold text-base">Locations</p>
                <div className="">
                  <select
                    name="pickup-location"
                    id="pickup-location"
                    className={`${styles.secondaryText} py-2 text-xs border-none outline-none`}
                  >
                    <option value="" className={`${styles.secondaryText}`}>
                      City
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold text-base">Date</p>
                <div className="">
                  <select
                    name="pickup-date"
                    id="pickup-date"
                    className={`${styles.secondaryText} py-2 text-xs border-none outline-none`}
                  >
                    <option value="" className={`${styles.secondaryText}`}>
                      Date
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold text-base">Time</p>
                <div className="">
                  <select
                    name="pickup-time"
                    id="pickup-time"
                    className={`${styles.secondaryText} py-2 text-xs border-none outline-none`}
                  >
                    <option value="" className={`${styles.secondaryText}`}>
                      Time
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-span-1 flex items-center justify-center`}>
          <div className="card-shadow w-14 h-14 bg-[#3563E9] rounded-lg flex items-center justify-center animate-spin transition-all duration-500">
            <HiArrowsUpDown className="text-white w-6 h-6" />
          </div>
        </div>
        <div
          className={`card-shadow col-span-3 py-6 md:py-8 px-8 lg:px-10 rounded-lg bg-white`}
        >
          <div className="w-full flex flex-col gap-y-4">
            <div className="flex items-center gap-x-3">
              <input
                type="radio"
                name="dropoff"
                id="dropoff"
                className="w-5 h-5"
              />
              <label htmlFor="dropoff" className="text-base font-semibold">
                Drop - Off
              </label>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col items-start">
                <p className="font-bold text-base">Locations</p>
                <div className="">
                  <select
                    name="pickup-location"
                    id="pickup-location"
                    className={`${styles.secondaryText} py-2 text-xs border-none outline-none`}
                  >
                    <option value="" className={`${styles.secondaryText}`}>
                      City
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <p className="font-bold text-base">Date</p>
                <div className="">
                  <select
                    name="pickup-date"
                    id="pickup-date"
                    className={`${styles.secondaryText} py-2 text-xs border-none outline-none`}
                  >
                    <option value="" className={`${styles.secondaryText}`}>
                      Date
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <p className="font-bold text-base">Time</p>
                <div className="">
                  <select
                    name="pickup-time"
                    id="pickup-time"
                    className={`${styles.secondaryText} py-2 text-xs border-none outline-none`}
                  >
                    <option value="" className={`${styles.secondaryText}`}>
                      Time
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropSelection;
